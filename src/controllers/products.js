const createProducts = (request, response) => {
	console.log(request.body)
	response.send(" created Products ")
}

const updateProducts =  (request, response) => {
	console.log(request.params.productId)
	response.send("Updated Products")
}

const deleteProducts =  (request, response) => {
	console.log(request.params.productId)
	response.send("Deleted Products")
}

const listProducts =  (request, response) => {
	console.log(request.query.limit)
  console.log(request.query.offset)
	response.send("List Products")
}

module.exports = {
	createProducts,
	updateProducts,
	deleteProducts,
	listProducts
}