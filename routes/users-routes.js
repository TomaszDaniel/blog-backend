const express = require('express')
const { check } = require('express-validator')

const router = express.Router()

const usersControllers = require('../controlers/users-controller')

router.get('/', usersControllers.getUsers)

router.post('/signup',
    [
        check('username')
            .not()
            .isEmpty(),
        check('email')
            .normalizeEmail()
            .isEmail(),
        check('password')
            .isLength({ min: 6 })
    ],
    usersControllers.signup)

router.post('/login', usersControllers.login)

module.exports = router