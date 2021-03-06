const uuid = require('uuid/v4')
const { validationResult } = require('express-validator')

const DUMMY_USERS = [
    {
        id: 1,
        username: "Maciek15",
        email: "maciek15@buziaczek.pl",
        password: "maciek15"
    },
    {
        id: 2,
        username: "Andrzej15",
        email: "andrzej15@buziaczek.pl",
        password: "andrzej15"
    },
    {
        id: 3,
        username: "Rafał15",
        email: "rafał15@buziaczek.pl",
        password: "rafał15"
    }
]

const getUsers = (req, res, next) => {
    console.log('get request in places')
    res.json(DUMMY_USERS)
}

const signup = (req, res, next) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return next(
            new HttpError('Invalid inputs passed please check your data', 422)
        )
    }
    const { username, password, email } = req.body

    const createdUser = {
        id: uuid(),
        username,
        password,
        email
    }
    res.json({ userId: createdUser.id, email: createdUser.email })
}

const login = (req, res, next) => {
    const { password, email } = req.body

    const user = DUMMY_USERS.filter(user => user.email === email)

    if (user[0].password !== password) {
        res.json({ message: "error" })
    } else {
        res.json({ userId: user[0].id, email: user[0].email })
    }

}

exports.getUsers = getUsers
exports.signup = signup
exports.login = login