const routes = require('express').Router();
const games = require('../util/count');

routes.get('/api/v1/games', (req, res) => {
    return res.json(games)
})

routes.get('/api/v1/games/:game', (req, res) => {
    const { game } = req.params
    const findGame = `game_${game}`
    return res.json({ [findGame]: games[findGame]})
})

module.exports = routes