var express = require('express');
var router = express.Router();
var cors = require('cors');
var getFarmers = require('../database/getFarmers')

const corsOptions ={
  origin:'http://localhost:4200', 
  credentials:true,            //access-control-allow-credentials:true
  optionSuccessStatus:200
}

router.get('/',  cors(corsOptions),async (req, res) => {
  return res.json(await getFarmers.farmerSearch(req.query.search))
});

module.exports = router;
