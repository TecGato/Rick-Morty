const http = require('http');
const data = require('./utils/data.js');
const PORT = 3001;

http
  .createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    if (req.url.includes('rickandmorty/character')) {
      const id = req.url.split('/').at(-1);
      const character = data.find((elemento) => elemento.id === Number(id));
      character
        ? res
            .writeHead(200, { 'Content-type': 'application/json' })
            .end(JSON.stringify(character))
        : res
            .writeHead(200, { 'Content-type': 'text/plain' })
            .end('Personaje aun no creado');

      return;
    }
  })
  .listen(PORT, 'localhost');
