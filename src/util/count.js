const log = require('./readFile');
const games = new Map();

const newGame = (key) => {
    const game = {
        total_kills: 0,
        players: [],
        kills: new Map()
    }
    games.set(key, game)
}

const newPlayer = (key, line) => {
    const player = line[1]
    let game = games.get(key)
    if(!(game.players).includes(player)){
        game.players.push(player)
        games.set(key, game)
    }
}

const newKill = (key, line) => {

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
    }
})

module.exports = games