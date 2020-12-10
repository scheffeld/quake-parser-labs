const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const routes = require('./src/routes/routes');

app.use(bodyParser.json());
app.use(routes);

module.exports = app