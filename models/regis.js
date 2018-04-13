const mongodb = require('./mongodb');
const Schema = mongodb.Schema;
const RegisSchema = new Schema({
	name: String,
	email: String,
	password: String
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



module.exports = new RegisDAO();
