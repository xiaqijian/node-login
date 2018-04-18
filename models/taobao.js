const mongodb = require('./mongodb');
const Schema = mongodb.Schema;
const TaobaoSchema = new Schema({
	title: String,
	imgUrl: String,
	category: String,
	coupon: String,
	couponCode: String,
	newPrice: String,
	oldPrice: String,
	shopCode: String,
	date: { type: Date, default: Date.now },
	shopId: { type: Number, default: 0 }
})

const Taobao = mongodb.model('taobao', TaobaoSchema);
const TaobaoDAO = function () {};

TaobaoDAO.prototype.save = function (obj) {
   const instance = new Taobao(obj);

  return new Promise((resolve, reject) => {
		instance.save((err, product) => {
			resolve(product)
			reject(err)
		})
	})
}

module.exports = new TaobaoDAO();