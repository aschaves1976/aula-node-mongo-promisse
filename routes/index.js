var express = require('express');
var router = express.Router();

// Aplicacção inicia somente com as variáveis de ambiente
require('dotenv-safe').config( {allowEmptyValues: true} )

const mongoDb = require('../db/mongo')

/* GET home page. */
router.get('/', function(req, res, next) {
  mongoDb.colection(process.env.MONGO_CUSTOMER_COLLECTION).find({}).toArray()
  res.render('index', { title: 'Express' });
});

module.exports = router;
