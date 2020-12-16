const games = require('../api/parser');

const index = (req, res) => {
  return res.status(200).json(games);
};

const show = (req, res) => {
  const { id } = req.params;
  const key = `game_${id}`;

  if (!games[key]) {
    return res.status(200).json({ [key]: 'Jogo não encontrado :(' });
  }

  return res.status(200).json({ [key]: games[key] });
};

module.exports = { index, show };
