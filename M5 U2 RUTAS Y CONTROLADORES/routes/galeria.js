var express = require('express')
var router = express.Router()

router.get('/', function(req, res, next){
    res.render('galeria') //view/galeria.hbs
})

module.exports = router