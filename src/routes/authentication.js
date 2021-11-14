const router = require('express').Router()

const {signup, login} = require('../controllers/authentication')

router.post('/signup', signup)
    .post('/login', login)

      
module.exports = router
