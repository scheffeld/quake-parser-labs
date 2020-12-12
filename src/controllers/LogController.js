const games = require('../util/parser');

module.exports = {
    index(req, res){
        return res.status(200).json(games)
    },
    show(req, res){
        const { game } = req.params
        const findGame = `game_${game}`

        return res.status(200).json({ [findGame] : games[findGame] })
    }
}