const express = require('express')

const router = express.Router()

const usersControllers = require('../controlers/users-controller')

router.get('/', usersControllers.getUsers)

router.post('/signup', usersControllers.signup)

router.post('/login', usersControllers.login)

module.exports = router