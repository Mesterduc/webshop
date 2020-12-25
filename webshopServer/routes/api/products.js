const express = require('express')
const router = express.Router()
const Product = require('../models/product')
const Category = require('../models/category')
var mongoose = require('mongoose')

router.get('/', async (req, res) => {
	await Product.find({})
		.then((data) => {
			res.json(data)
		})
		.catch((err) => {
			console.log(err)
		})
})

router.post('/', async (req, res, next) => {
	await Product.create(
		{
			name: req.body.name,
			brand: req.body.brand,
			price: req.body.price,
			category: mongoose.Types.ObjectId(req.body.category),
			desc: req.body.desc,
		},
		(error, data) => {
			if (error) {
				return next(error)
			} else {
        console.log(data)
        // res.send("hello")
				Category.findByIdAndUpdate(req.body.category, { $push: {product: data._id},  $inc: {amount: 1} })
					.then((data) => {
						res.json(data)
					})
					.catch((err) => {
						console.log(err)
					})
			}
		}
	)
})

router.delete('/', async (req, res) => {
	await Product.findByIdAndRemove(req.body._id, (error, data) => {
		if (error) {
			return next(error)
		} else {
			Category.findByIdAndUpdate(req.body._id, { $pull: { product: { _id: req.body._id} } })
				.then((data) => {
					res.status(200).json({
						msg: data,
					})
				})
				.catch((err) => {
					console.log(err)
				})
			// res.status(200).json({
			//   msg: data,
			// })
		}
	})
})

module.exports = router
