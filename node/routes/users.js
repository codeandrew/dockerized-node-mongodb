var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a reources test');
});

router.get('/:id', function(req, res, next) {
  res.json({
      "user" : "test",
      "id" : req.params.id
  });
});

module.exports = router;
