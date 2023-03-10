const axios = require('axios');
const { Character } = require('../DB_connection');

const getApiData = async () => {
  const characters = [];
  try {
    for (let i = 1; i <= 100; i++) {
      const response = await axios(
        `https://rickandmortyapi.com/api/character/${i}`
      );
      const data = response.data;
      const obj = {
        id: data.id,
        name: data.name,
        species: data.species,
        status: data.status,
        image: data.image,
        gender: data.gender,
        origin: data.origin.name,
      };
      characters.push(obj);
    }
    return characters;
  } catch (error) {
    return { error: error.message };
  }
};

const saveApiData = async () => {
  try {
    const arrayData = await getApiData();
    const createCharacters = await Character.bulkCreate(arrayData);
  } catch (error) {
    return { error: error.message };
  }
};

module.exports = { saveApiData };
