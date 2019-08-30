var express = require('express');
var router = express.Router();
var {db} = require('../db/index')
/* GET users listing. */
router.post('/getBasic',  function(req, res, next) {
  var id = req.body.id
  var result = db.getBasic({id});
  res.send(result);
});
router.post('/saveBasic', function(req, res, next) {
  var id = req.body.id
  var list = req.body.list
  db.saveBasic({id, list})
  res.send({});
});


router.post('/getArrangeList', function(req, res, next) {
  var result = db.getArrangeList();
  res.send(result);
});
router.post('/getArrange', function(req, res, next) {
  var id = req.body.id
  var result = db.getArrange({id});
  res.send(result);
});
router.post('/saveArrange', function(req, res, next) {
  var id = req.body.id
  var list = req.body.list
  db.saveArrange({id, list})
  res.send({});
});


module.exports = router;
