const moment = require('moment');

function changeDate ( data ) {
	var arr = data;
	for (item in arr) {
		item.date = moment(item.date).format('YYYY-MM-DD HH:mm:ss');
	}
	return arr
}