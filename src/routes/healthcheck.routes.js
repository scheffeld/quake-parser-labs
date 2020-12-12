const routes = require('express').Router();

routes.get('/api/v1/healtcheck', (req, res) => {
    try{
        const hcInfo = {
            uptime: process.uptime(),
            message: 'UP',
            timestamp: Date.now()
        }

        return res.status(200).json(hcInfo);
    }
    catch(e){
        return res.status(500).json(e);
    }
});

module.exports = routes