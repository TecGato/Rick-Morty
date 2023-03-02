const express = require('express');
const { router } = require('./routes/index');
const server = express();
let { favs } = require('./utils/favs');
const PORT = 3001;
const cors = require('cors');

server.use(cors());
server.use(express.json());
server.use('/', router);

server.post('/rickandmorty/fav', (req, res) => {
  const obj = req.body;
  favs.push(obj);
  res.status(200).send(obj);
});

server.get('/rickandmorty/fav', (req, res) => {
  const characters = favs;
  res.status(200).json(characters);
});

server.delete('/rickandmorty/fav/:id', (req, res) => {
  const { id } = req.params;
  let favsFiltered = [];
  if (id) {
    favsFiltered = favs.filter((elemento) => parseInt(id) !== elemento.id);
    if (favsFiltered.length === favs.length) {
      return res.status(400).json({
        error: 'No se encuentra el Id especificado entre los favoritos',
      });
    }
    favs = favsFiltered;
    return res.status(200).send(id);
  } else {
    res.status(400).json({ error: 'Se requiere Id para eliminar' });
  }
});

server.listen(PORT, () => {
  console.log('server raised in port ' + PORT);
});
