const { response } = require("express")

const createUsers = (request, response) => {
    console.log(request.body)
    response.send("We received your request !!!")
}

const updateUsers = (request, response) => {
    console.log(request.params.id)
    response.send("We updated your request !!!")
}

const deleteUsers = (request, response) => {
    console.log(request.params.id)
    response.send("We deleted record !!!")
}

const listUsers = (request, response) => {
    console.log(request.query.limit)
    console.log(request.query.offset)
    response.send("lised all products (fetched details from db) !!!")
}

module.exports = {
    createUsers,
    updateUsers,
    deleteUsers,
    listUsers
}