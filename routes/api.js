var express = require('express');
var router = express.Router();
var RegisDAO = require('../models/regis')


/* GET home page. */
router.get('/users', function(req, res, next) {
  RegisDAO.find().then((data) => {
  	res.send(data)
  }, (err) => {
    res.send(data)
  })
  
});



module.exports = router;
