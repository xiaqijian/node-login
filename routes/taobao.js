const express = require('express');
const router = express.Router();
const taobaoDO = require('../models/taobao.js')


router.get('/', (req, res, next) => {
   res.render('taobao', { title: '淘宝'})
}) 

router.post('/', (req, res, next) => {
   var obj  = req.body.taobao;
   // console.log(obj);
   //res.send({ success: true})

   taobaoDO.save(obj).then((value) => {
   	console.log('存储成功')
   	// console.log(value)
      res.send({ success: true})
   }, (err) => {
   	console.log(err)
      res.send({ success: false})
   })
   

})


module.exports = router;