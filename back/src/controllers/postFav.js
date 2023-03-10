const { Favorite } = require('../DB_connection');

const postFav = async (req, res) => {
  const { name, status, species, gender, origin, image } = req.body;
  try {
    if (!name || !species || !gender || !image)
      throw new Error('Faltan datos oligatorios para la ejecuciòn');
    const fav = await Favorite.create(req.body);
    return res.status(200).json(fav);
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

module.exports = { postFav };
