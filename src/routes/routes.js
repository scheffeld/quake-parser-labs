const routes = require('express').Router();
const multer = require('multer');
const multerConfig = require('../config/multer')
const path = require('path')
const LogController = require('../controllers/LogController');

routes
    .post('/api/v1/upload', multer(multerConfig).single('file'), (req, res) => {
        return res.status(200).json()
    })
    .get('/api/v1/games', LogController.index)
    .get('/api/v1/games/:game', LogController.show);

module.exports = routes