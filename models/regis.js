const mongodb = require('./mongodb');
const Schema = mongodb.Schema;
const RegisSchema = new Schema({
	name: String,
	email: String,
	password: String,
	date: { type: Date, default: ISODate() }
})

const Regis = mongodb.model("users", RegisSchema);
const RegisDAO = function (){};

RegisDAO.prototype.save = function (obj) {
	const instance = new Regis(obj)

	return new Promise((resolve, reject) => {
		instance.save((err, product) => {
			resolve(product)
			reject(err)
		})
	})
}
RegisDAO.prototype.findUser = function (email) {
	return new Promise((resolve, reject) => {
		Regis.findOne({ email: email }, function(err, dos){
			if(!err) {
				resolve(dos)
			}else {
				reject(err)
			}
		})
	})
}
RegisDAO.prototype.find = function () {
	return new Promise((resolve, reject) => {
		Regis.find({},{_id:0,password:0,__v:0 },(err, doc) => {
			resolve(doc);
			reject(err)
		})
	})
}



module.exports = new RegisDAO();
