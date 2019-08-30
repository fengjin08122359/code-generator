var express = require('express');
var router = express.Router();
var {db} = require('../db/index')
/* GET users listing. */
router.post('/', function(req, res, next) {
  res.send(db.getAllProject());
});

router.post('/add', function(req, res, next) {
  var name = req.body.name
  db.addProject(name)
  res.send({});
});

router.post('/del', function(req, res, next) {
  var id = req.body.id
  db.delProject(id)
  res.send({});
});

router.post('/modify', function(req, res, next) {
  var newName = req.body.newName
  var id = req.body.id
  db.modifyProject(id, {newName})
  res.send({});
});


router.post('/getRouter', function(req, res, next) {
  var id = req.body.id
  res.send(db.getRouter(id));
});

router.post('/addRouter', function(req, res, next) {
  var id = req.body.id
  var name = req.body.name
  var path = req.body.path
  db.addRouter(id, {name, path})
  res.send({});
});

router.post('/delRouter', function(req, res, next) {
  var id = req.body.id
  var routerId = req.body.routerId
  db.delRouter(id, routerId)
  res.send({});
});

router.post('/modifyRouter', function(req, res, next) {
  var id = req.body.id
  var name = req.body.name
  var path = req.body.path
  var routerId = req.body.routerId
  db.modifyRouter(id, {routerId,name,path})
  res.send({});
});

module.exports = router;
