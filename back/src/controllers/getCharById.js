const { Favorite } = require('../DB_connection');

const getCharById = async (req, res) => {
  try {
    const allchar = await Favorite.findAll();
    if (!allchar) throw new Error('no hay favoritos');
    return res.status(200).json(allchar);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = { getCharById };
