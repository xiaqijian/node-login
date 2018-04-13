var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var users = req.session.users;
  console.log(users);
  console.log(typeof users);
  res.render('index', { title: 'Express', users });
});

module.exports = router;
