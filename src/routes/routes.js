const routes = require('express').Router();
const games = require('../util/count');

routes.get('/api/v1/games', (req, res) => {
    return res.json(games)
})

module.exports = routes