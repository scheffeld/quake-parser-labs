const routes = require('express').Router();

routes.get('/', (req, res) => {
    return res.json({ server: "up" })
})

module.exports = routes