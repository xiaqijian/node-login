var express = require('express');
var router = express.Router();
var RegisDO = require('../models/regis.js')
/* GET users listing. */
router.get('/', function(req, res, next) {
  var name = req.session.users.name
  res.render('users', { title:'用户中心', name: name })
});

router.get('/loginout', function(req, res, next) {
  req.session.users = null;
  res.redirect('/')
});

router.get('/login', function(req, res, next) {
  res.render('login', { title: 'login' })
});
router.post('/login', function(req, res, next){
	// console.log(req.body.users);
	var objlogin = req.body.users;
	var email = objlogin.email;
	var password = objlogin.password;
	RegisDO.findUser(email).then((value) => {
		if(!value){
			// console.log('没有注册')
			res.send({ success: false, text: '无该用户，请注册' })
		}else{
			// console.log(value)
			var psw = value.password;
			if(password === psw) {
				// console.log('密码相等');
				req.session.users = {
					name: value.name
				}
			    res.send({ success: true, text: '登录成功' })

			}else {
				// console.log('密码不相等');
			    res.send({ success: false, text: '密码输入错误，请重新输入' })
			}
		}
	}, (error) => {
		console.log('登录时，查询数据库出错'+error);

	})
})

router.get('/regis', function(req, res, next) {
  res.render('regis', { title:'regis' })
})
router.post('/regis', function(req, res, next){
	// console.log(req.body.users)
	var obj = req.body.users;
	var email = obj.email;
	RegisDO.findUser(email).then((value) => {
		if(!value){
			// console.log('没有注册')
			RegisDO.save(obj).then((value) => {
				// console.log(value);
				// console.log('注册成功')
				res.send({ success: true, text:'注册成功'})
			},(err) => {
				// console.log(err)
				res.send({ success: false, text:'注册失败'})
			})
		}else {
			res.send({ success: false, text:'注册过了'})
			// console.log('注册过了')
		}
	}, (err) => {
		console.log('注册查询数据库出错'+err)
		// console.log(err)
	})
	
	
})

module.exports = router;
