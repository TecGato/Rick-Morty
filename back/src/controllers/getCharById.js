const axios = require('axios');
const http = require('http');

const getCharById = (res, ID) => {
  axios(`https://rickandmortyapi.com/api/character/${ID}`)
    .then((response) => {
      const obj = {
        id: response.data.id,
        image: response.data.image,
        name: response.data.name,
        gender: response.data.gender,
        species: response.data.species,
      };
      res
        .writeHead(200, { 'Content-type': 'application/json' })
        .end(JSON.stringify(obj));
    })
    .catch((err) =>
      res.writeHead(500, { 'Content-type': 'text/plain' }).end(err.message)
    );
};

module.exports = { getCharById };
