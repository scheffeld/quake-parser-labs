const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes/routes');

const port = process.env.PORT || 3001;

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(routes);

app.listen(port);

console.info('Quake parser has been started...');

module.exports = app;
