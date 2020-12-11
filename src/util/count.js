const log = require('./readFile');
const games = new Map();

/**
 * Initialize a new game
 * @param {String} key - Key of new game
 */
const newGame = (key) => {
    const game = {
        total_kills: 0,
        players: [],
        kills: new Map()
    }
    games.set(key, game)
}

/**
 * Store a new player in the game
 * @param {String} key - Game key
 * @param {Array} line - Line of log
 */
const newPlayer = (key, line) => {
    const player = line[1]
    let game = games.get(key)

    if((player != '<world>') && (!game.players.includes(player))){
        game.players.push(player)
        game.kills.set(player, 0)
        games.set(key, game)
    }
}

/**
 * Get a player who killed
 * @param {String} line - Line of log
 */
const playerKill = (line) => {
    const startIndex = line.lastIndexOf(':') + 2
    const endIndex = line.indexOf('killed') - 1

    return line.slice(startIndex, endIndex)
}

/**
 * Get a player who died
 * @param {String} line - Line of log
 */
const playerDeath = (line) => {
    const startIndex = line.indexOf('killed') + 7
    const endIndex = line.indexOf('by') - 1

    return line.slice(startIndex, endIndex)
}

/**
 * Store a new kill in the game
 * @param {String} key - Game key
 * @param {Array} line - Line of log
 */
const newKill = (key, line) => {
    const playerKill_ = playerKill(line)
    const playerDeath_ = playerDeath(line)
    let game = games.get(key)

    if(playerKill_ === '<world>'){
        game.kills.set(playerDeath_, (game.kills.get(playerDeath_) - 1))
    } else if(playerKill_ !== playerDeath_){
        game.kills.set(playerKill_, (game.kills.get(playerKill_) + 1))
    }

    game.total_kills += 1
    games.set(key, game)
    
}

log.forEach((l) => {
    const line = l.trim().split(/[\\]/)
    const [ , action, ] = line[0].split(' ')

    switch(action){
        case 'InitGame:':
            key = `game_${games.size+1}`
            newGame(key);
            break;
        
        case 'ClientUserinfoChanged:':
            newPlayer(key, line);
            break;

        case 'Kill:':
            newKill(key, line[0].trim());
            break;
    }
})

games.forEach((value, key) => {
    value.kills = Object.fromEntries(value.kills)
    games.set(key, value)
})

module.exports = Object.fromEntries(games)