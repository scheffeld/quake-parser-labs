const routes = require('express').Router();
const LogController = require('../controllers/LogController');

/**
 * Route to check the status of the application
 */
routes.get('/api/v1/healthcheck', (req, res) => {
  return res.status(200).json({
    uptime: process.uptime(),
    status: 'UP',
    port: process.env.PORT || 3001,
    timestamp: Date.now(),
  });
});

/**
 * Route to return all games
 */
routes.get('/api/v1/games', LogController.index);

/**
 * Route to return a specific game
 */
routes.get('/api/v1/games/:id', LogController.show);

module.exports = routes;
