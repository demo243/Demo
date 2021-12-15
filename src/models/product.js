const mongoose = require('mongoose');
const { Category } = require('./category');
const { Schema } = mongoose;

const productSchema = new Schema({
		name: {
			type: String,
			required: true,
			minLength: 2,
			maxLength: 130
		},
    category: {
			type: Schema.Types.ObjectId,
			required: true,
			ref: Category
    },
		price: {
			type: Number,
			required: true,
			min:1
		},
		description: {
			type: String,
			required: true,
			minLength: 5,
			maxLength: 10000
		},
		stock: {
			type: Number,
			required: true,
			min: 0
		},
		codEligible: {
			type: Boolean,
			required: true,
			enum: [true, false],
			default: true
		},
		code: {
			type: String,
			required: true
		}
})
const Product = mongoose.model('Product', productSchema);

module.exports = Product