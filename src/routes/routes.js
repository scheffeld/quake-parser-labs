const routes = require('express').Router();
const games = require('../util/count');
const LogController = require('../controllers/LogController');

routes
    .get('/api/v1/games', LogController.index)
    .get('/api/v1/games/:game', LogController.show);

module.exports = routes