const mongoose = require('mongoose');

const listSchema = mongoose.Schema({
	title: {
		type: String
	},
	note: {
		type: String
	}
});

const List = mongoose.model('List', listSchema);
module.exports = List;
