const games = require('../api/parser');

module.exports = {
  index(req, res) {
    return res.status(200).json(games);
  },
  show(req, res) {
    const { id } = req.params;
    const key = `game_${id}`;

    return res.status(200).json({ [key]: games[key] });
  },
};
