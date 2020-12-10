const express = require('express');
const app = express();
const routes = require('./src/routes/routes');

app.use(routes)

module.exports = app