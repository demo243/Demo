
const router = require('express').Router()
const { createUsers,updateUsers, deleteUsers, listUsers } = require('../controllers/users')

router.post('/users', createUsers)
			.put('/users/:id', updateUsers)
			.delete('/users/:id', deleteUsers)
			.get('/users', listUsers)
module.exports = router
