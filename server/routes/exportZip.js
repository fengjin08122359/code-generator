var express = require('express');
var router = express.Router();
var {db} = require('../db/index')
var {generateComponents, generatePages, generateRouters, clearAim, createZip} = require('../utils/generate')
/* post users listing. */
router.post('/component', async function(req, res, next) {
  var id = req.body.id
  clearAim()
  await generateComponents(id, db.getArrange({id}) || [])
  await createZip()
  res.send({src: './server/dist.zip'});
});


router.post('/basic',async function(req, res, next) {
  var id = req.body.id
  clearAim()
  await generatePages(id, db.getBasic({id}) || [])
  await createZip()
  res.send({src: './server/dist.zip'});
});


router.post('/router',async function(req, res, next) {
  var id = req.body.id
  var needPage = req.body.needPage
  clearAim()
  var routerData = await generateRouters(db.getRouter(id) || [])
  if (needPage) {
    routerData.forEach(async item => {
      await generatePages(item.id, db.getBasic({id: item.id}) || [])
    })
  }
  await createZip()
  res.send({src: './server/dist.zip'});
});


router.post('/project',async function(req, res, next) {
  var id = req.body.id
  clearAim()
  var routerData = await generateRouters(db.getRouter(id) || [])
  routerData.forEach(async item => {
    await generatePages(item.id, db.getBasic({id: item.id}) || [])
  })
  await createZip(true)
  res.send({src: './server/dist.zip'});
});


module.exports = router;
