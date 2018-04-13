const mongoose = require('mongoose');

let dataurl = 'mongodb://localhost:27017/demo';

mongoose.connect( dataurl, (err) => {
	if(err) {
		console.err('connect to error:'+ err.message)
	}
})

mongoose.connection.on("open", () => {
	console.log("数据库连接成功");
})

mongoose.connection.on("error", (error) => {
	console.log("数据库连接失败" + error );
})


module.exports = mongoose;