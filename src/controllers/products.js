const Product = require('../models/product')

const createProducts = (request, response) => {
	console.log(request.body)
	const productRequest = new Product(request.body)
	productRequest.save()
	.then(saveProduct => {
		return response.status(201).json({
			status: true,
			data: saveProduct
		})
	})
	.catch(error => {
		return response.status(500).json({
			status: false,
			error: {
				name: error.name,
				message: error.message
			}
		})
	})
	// response.send(" created Products ")
}

const updateProducts =  (request, response) => {
	// request.params.productId // errror // update response
	Product.findById(request.params.productId)
	.then(product => {
		if(!product) {
			return response.status(404).json({
				status: false,
				error: {
					name: 'NotFoundError',
					message: 'Product with this Id not found'
				}
			})
		}
		product.set(request.body)
		product.save()
		.then(updatedProduct => {
			return response.status(200).json({
				status: true,
				data: updatedProduct
			})
		})
		.catch(error => {
		return response.status(500).json({
			status: false,
			error: {
				name: error.name,
				message: error.message
			}
		})
	})
	})
	.catch(error => {
		return response.status(500).json({
			status: false,
			error: {
				name: error.name,
				message: error.message
			}
		})
	})
	// console.log(request.params.productId)
	// response.send("Updated Products")
}

const deleteProducts =  (request, response) => {
	Product.findById(request.params.productId)
	.then(product => {
		if(!product) {
			return response.status(404).json({
				status: false,
				error: {
					name: 'NotFoundError',
					message: 'Product with this Id not found'
				}
			})
		}
		product.remove()
		.then(deletedProduct => {
			return response.status(200).json({
				status: true,
				data: deletedProduct
			})
		})
		.catch(error => {
			return response.status(500).json({
				status: false,
				error: {
					name: error.name,
					message: error.message
				}
			})
		})
	})
	.catch(error => {
		return response.status(500).json({
			status: false,
			error: {
				name: error.name,
				message: error.message
			}
		})
	})
}

const listProducts =  (request, response) => {
	Product.find()
	.then(listProducts => {
		return response.status(200).json({
			status: true,
			data: listProducts
		})
	})
	.catch(error => {
		return response.status(500).json({
			status: false,
			error: {
				name: error.name,
				message: error.message
			}
		})
	})
}

module.exports = {
	createProducts,
	updateProducts,
	deleteProducts,
	listProducts
}