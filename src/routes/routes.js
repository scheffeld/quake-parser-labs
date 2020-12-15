const routes = require('express').Router();
const multer = require('multer');
const multerConfig = require('../config/multer');
const LogController = require('../controllers/LogController');
const UploadFileController = require('../controllers/UploadFileController');

/**
 * Rota para realizar o upload do arquivo de log
 */
routes.post('/api/v1/upload', multer(multerConfig).single('file'), UploadFileController.upload);

/**
 * Rota para retornar todas as partidas do log
 */
routes.get('/api/v1/games', LogController.index);

/**
 * Rota para retornar uma partida específica do log
 */
routes.get('/api/v1/games/:id', LogController.show);

module.exports = routes;
