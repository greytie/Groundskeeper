var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send([
    'Paint fence',
    'Pick herbs',
    'Mow the lawn'
  ]);
});

module.exports = router;
