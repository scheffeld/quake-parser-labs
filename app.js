const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./src/routes/routes');
const healthCheck = require('./src/routes/healthCheck.routes');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(routes);
app.use(healthCheck);

module.exports = app;
