const routes = require('express').Router();
const LogController = require('../controllers/LogController');

/**
 * Rota para realizar a checagem do status da aplicacao
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
 * Rota para retornar todas as partidas do log
 */
routes.get('/api/v1/games', LogController.index);

/**
 * Rota para retornar uma partida específica do log
 */
routes.get('/api/v1/games/:id', LogController.show);

module.exports = routes;
