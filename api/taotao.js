const express = require('express');
const router = express.Router();
const TaobaoDO = require('../models/taobao');


router.get('/', (req, res, next) => {
	res.send('this is taobao api')
})



module.exports = router;