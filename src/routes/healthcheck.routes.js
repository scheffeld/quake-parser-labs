const routes = require('express').Router();

/**
 * Rota para retornar o status/saúde da aplicação
 */
routes.get('/api/v1/healthcheck', (req, res) => {
  return res.status(200).json({
    uptime: process.uptime(),
    status: 'UP',
    port: process.env.PORT || 3001,
    timestamp: Date.now(),
  });
});

module.exports = routes;
