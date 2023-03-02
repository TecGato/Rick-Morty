const URL = 'https://rickandmortyapi.com/api/character/';
const axios = require('axios');

const getCharByDetail = async (req, res) => {
  const { id } = req.params;
  try {
    const response = await axios(URL + id);
    const data = response.data;
    const obj = {
      id: data.id,
      name: data.name,
      species: data.species,
      image: data.image,
      gender: data.gender,
      origin: data.origin.name,
    };
    return res.status(200).json(obj);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = { getCharByDetail };
