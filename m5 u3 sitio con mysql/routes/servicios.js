var express = require('express');
var router = express.Router();
var novedadesModel = require('../models/novedadesModels');

router.get('/', async function(req, res, next) {

  var novedades = await novedadesModel.getNovedades();
  
  res.render('servicios',{
    isServicios:true,
    novedades
  });
});

module.exports = router;
