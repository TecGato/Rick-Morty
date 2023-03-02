const { Router } = require('express');
const { getCharById } = require('../controllers/getCharById');
const { getCharByDetail } = require('../controllers/getCharDetail');
const router = Router();

router.get('/onsearch/:id', (req, res) => {
  getCharById(req, res);
});
router.get('/detail/:id', (req, res) => {
  getCharByDetail(req, res);
});

module.exports = { router };
