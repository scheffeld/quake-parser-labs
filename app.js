const express = require('express');
const app = express();

app.get('/', (req, res) => {
    return res.json({ server: "up" })
})

module.exports = app