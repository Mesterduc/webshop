const mongoose = require('mongoose')
const Schema = mongoose.Schema

const productSchema = new Schema({
	name: {
		type: String,
		required: true,
		trim: true,
	},
	brand: {
		type: String,
		required: true,
	},
	// img: [{
	// 	type: String,
	// 	required: true
	// }],
	price: { type: Number, required: true },
	salePrice: Number,
	category: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Category' }],
	// lav en tabel der holder øje med om et produkt har et variants
	// variants: [{type: mongoose.Schema.Types.ObjectId, ref: 'Product_variants'}]
	desc: {
		type: String,
		trim: true,
	}
},{ timestamps: { createdAt: 'created_at' } })

module.exports = mongoose.model('Product', productSchema)
