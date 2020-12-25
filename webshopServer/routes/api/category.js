const express = require('express')
const router = express.Router()
const Product = require('../models/product')
const Category = require('../models/category')
const product = require('../models/product')

router.get('/', async (req, res) => {
	await Category.find({})
		.then((data) => {
			res.json(data)
		})
		.catch((err) => {
			console.log(err)
		})
})

router.post('/', async (req, res, next) => {
	await Category.create(
		{
			name: req.body.name,
			amount: 0,
			desc: req.body.desc,
		},
		(error, data) => {
			if (error) {
				return next(error)
			} else {
				res.json(data)
			}
		}
	)
})

router.delete('/', async (req, res) => {
	await Category.findByIdAndRemove(req.body._id, (error, data) => {
		if (error) {
			return next(error)
		} else {
            console.log(data)
            if(data.product.length != 0){
                Product.deleteMany({ afdeling: req.body.afdeling })
                .then((e) => {
                    res.status(200).send('Alle medarbejder i den slettet afdeling er slettet')
                  })
                .catch(err => {
                    console.log(err)
                })

            }else{
                res.send("hej")
            }
		}
	})
})

module.exports = router
