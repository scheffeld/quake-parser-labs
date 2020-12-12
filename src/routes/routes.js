const routes = require('express').Router();
const multer = require('multer');
const multerConfig = require('../config/multer');
const LogController = require('../controllers/LogController');
const UploadFileController = require('../controllers/UploadFileController');

routes
    .post('/api/v1/upload', multer(multerConfig).single('file'), UploadFileController.upload)
    .get('/api/v1/games', LogController.index)
    .get('/api/v1/games/:game', LogController.show)

module.exports = routes