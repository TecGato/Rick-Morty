const express = require('express');
const { router } = require('./routes/index');
const server = express();
const PORT = 3001;
const cors = require('cors');
const { saveApiData } = require('./controllers/saveApiData');
const { sequelize } = require('./DB_connection');
const { postFav } = require('./controllers/postFav');
const { getCharByDetail } = require('./controllers/getCharDetail');
const { getCharById } = require('./controllers/getCharById');
const morgan = require('morgan');

server.use(cors());
server.use(express.json());
server.use('/', router);
server.use(morgan('dev'));

server.post('/rickandmorty/fav', (req, res) => {
  postFav(req, res);
});

server.get('/rickandmorty/fav', (req, res) => {
  getCharById(req, res);
});

server.delete('/rickandmorty/fav/:id', (req, res) => {
  getCharByDetail(req, res);
});

sequelize.sync({}).then(async () => {
  saveApiData();
  server.listen(PORT, () => {
    console.log('server raised in port ' + PORT);
  });
});
