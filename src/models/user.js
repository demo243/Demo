const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
	name: {
		type: String,
		required: true
	},
	email: {
		type: String,
		required: true
	},
	hash: {
		type: String,
		required: true
	},
	salt: {
		type: String,
		required: true
	},
	phoneNumber: {
		type: String,
		required: false
	}
})

const User = mongoose.model('User', userSchema);

module.exports = {
    User
}