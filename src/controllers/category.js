const createCategory = (request, response) => {
    console.log(request.body)
	response.send("created Category")
}

const updateCategory =  (request, response) => {
    console.log(request.params.categoryId)
	response.send("Updated Category")
}

const deleteCategory =  (request, response) => {
    console.log(request.params.categoryId)
	response.send("Deleted Category")
}

const listCategory =  (request, response) => {
    console.log(request.query.limit)
    console.log(request.query.offset)
	response.send("List Category")
}

module.exports = {
	createCategory,
	updateCategory,
	deleteCategory,
	listCategory
}