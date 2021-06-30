var express = require('express');
var router = express.Router();
var getFarmers = require('../database/getFarmers')

router.get('/', async (req, res) => {
  return res.json(await getFarmers.farmerSearch(req.query.search))
});

module.exports = router;
