const { Favorite } = require('../DB_connection');

const getCharByDetail = async (req, res) => {
  const { id } = req.params;
  try {
    if (!id) throw new Error('no se recibio Id');
    const deletedChar = await Favorite.findByPk(id);
    if (!deletedChar) throw new Error('Id no encontrado para ser eliminado');
    await deletedChar.destroy();
    return res.status(200).json(deletedChar);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = { getCharByDetail };
