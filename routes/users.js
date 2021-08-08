var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource! hahaha');
  console.log('usersjs __dirname path is ',__dirname)
});

module.exports = router;
