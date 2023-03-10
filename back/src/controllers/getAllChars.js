const { Character } = require('../DB_connection');

const getAllChars = async (req, res) => {
  try {
    const AllCharacters = await Character.findAll();
    console.log(Character.findAll());
    res.status(200).json(AllCharacters);
  } catch (error) {
    return { error: error.message };
  }
};

module.exports = { getAllChars };
