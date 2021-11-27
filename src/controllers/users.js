const jwt = require('jsonwebtoken')
const jwt_decode = require('jwt-decode')

const applicationSecretKey = "ApplicationSecretKey123"

const createUsers = (request, response) => {
    console.log(request.body)
    response.send("We received your request !!!")
}

const updateUsers = (request, response) => {
    console.log(request.params.id)
    const decodedValueUsingJWT = jwt.verify(request.headers.token, applicationSecretKey)
    console.log(decodedValueUsingJWT)
    const decodedValueUsingJWTDecode = jwt_decode(request.headers.token)
    console.log(decodedValueUsingJWTDecode)
		console.log(request.user)
    response.send("We updated your request !!!")
}

const deleteUsers = (request, response) => {
    console.log(request.params.id)
    const decodedValueUsingJWT = jwt.verify(request.headers.token, applicationSecretKey)
    console.log(decodedValueUsingJWT)
    const decodedValueUsingJWTDecode = jwt_decode(request.headers.token)
    console.log(decodedValueUsingJWTDecode)
		console.log(request.user)
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