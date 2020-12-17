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
    kills: new Map(),
  };
  games.set(key, game);
};

/**
 * Store a new player in the game
 * @param {String} key - Game key
 * @param {Array} line - Line of log
 */
const newPlayer = (key, line) => {
  const player = line[1];
  const game = games.get(key);

  if ((player !== '<world>') && (!game.players.includes(player))) {
    game.players.push(player);
    game.kills.set(player, 0);
    games.set(key, game);
  }
};

/**
 * Get a player who killed
 * @param {String} line - Line of log
 */
const playerKill = (line) => {
  const startIndex = line.lastIndexOf(':') + 2;
  const endIndex = line.indexOf('killed') - 1;

  return line.slice(startIndex, endIndex);
};

/**
 * Get a player who died
 * @param {String} line - Line of log
 */
const playerDeath = (line) => {
  const startIndex = line.indexOf('killed') + 7;
  const endIndex = line.indexOf('by') - 1;

  return line.slice(startIndex, endIndex);
};

/**
 * Store a new kill in the game
 * @param {String} key - Game key
 * @param {Array} line - Line of log
 */
const newKill = (key, line) => {
  const playerKilled = playerKill(line);
  const playerDied = playerDeath(line);
  const game = games.get(key);

  if (playerKilled === '<world>') {
    game.kills.set(playerDied, (game.kills.get(playerDied) - 1));
  } else if (playerKilled !== playerDied) {
    game.kills.set(playerKilled, (game.kills.get(playerKilled) + 1));
  }

  game.total_kills += 1;
  games.set(key, game);
};

log.forEach((logLine) => {
  const line = logLine.trim().split(/[\\]/);
  const arrayLine = line[0].split(' ');
  const action = arrayLine[1];

  switch (action) {
    case 'InitGame:':
      key = `game_${games.size + 1}`;
      newGame(key);
      break;

    case 'ClientUserinfoChanged:':
      newPlayer(key, line);
      break;

    case 'Kill:':
      newKill(key, line[0].trim());
      break;

    default:
  }
});

/**
 * Converting games Map to Object
 */
games.forEach((value, key) => {
  value.kills = Object.fromEntries(value.kills);
  games.set(key, value);
});

module.exports = Object.fromEntries(games);
