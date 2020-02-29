const express = require('express')

const router = express.Router()

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

router.get('/', (req, res, next) => {
    console.log('get request in places')
    res.json(DUMMY_USERS)
})

module.exports = router