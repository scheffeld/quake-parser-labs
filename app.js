const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const routes = require('./src/routes/routes');
const healthcheck = require('./src/routes/healthcheck.routes');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))
app.use(routes);
app.use(healthcheck);

module.exports = app