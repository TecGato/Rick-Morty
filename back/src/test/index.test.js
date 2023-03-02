const app = require('../server');
const session = require('supertest');
const agent = session(app);

describe('Test de RUTAS', () => {
  it('Responde con status 200', () => {
    agent.get('/rickandmorty/1').expect(200);
  });
});
