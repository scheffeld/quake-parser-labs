const express = require('express');
const app = express();

app.get('/', (req, res) => {
    return res.json({ server: "up" })
})

app.listen(3333)