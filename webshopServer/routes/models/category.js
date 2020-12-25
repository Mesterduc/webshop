const mongoose = require('mongoose')
const Schema = mongoose.Schema

const categorySchema = new Schema({
	name: {
		type: String,
		required: true,
		trim: true
	},
	amount: Number,
	product : [{ type: mongoose.Schema.Types.ObjectId, ref: 'Product' }],
	desc: {
		type: String,
		trim: true
	},
	
})

module.exports = mongoose.model("Category", categorySchema)