const fs = require('fs');
const path = require('path')

const fileDir = path.join(__dirname, '../../uploads/games.log')

const gameLog = fs.readFileSync(fileDir)
    .toString()
    .split(/\n/)

module.exports = gameLog