const { Router } = require('express');
const { getCharById } = require('../controllers/getCharById');
const { getCharByDetail } = require('../controllers/getCharDetail');
const { getAllChars } = require('../controllers/getAllChars');
const { getAllCharById } = require('../controllers/getAllCharById');
const router = Router();

router.get('/onsearch/:id', (req, res) => {
  getAllCharById(req, res);
});
router.get('/detail/:id', (req, res) => {
  getCharByDetail(req, res);
});
router.get('/rickandmorty/all', (req, res) => {
  getAllChars(req, res);
});

module.exports = { router };
