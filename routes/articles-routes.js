const express = require('express')

const router = express.Router()

const DUMMY_ARTICLES = [
    {
        id: 1,
        title: "Tytuł 1",
        text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima quis unde ratione quam non ea laudantium reprehenderit repellendus labore laboriosam libero rerum animi dolores, quo quod. Iure maxime laudantium neque.",
        author: "Jan Kowalski"
    },
    {
        id: 2,
        title: "Tytuł 3",
        text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima quis unde ratione quam non ea laudantium reprehenderit repellendus labore laboriosam libero rerum animi dolores, quo quod. Iure maxime laudantium neque.",
        author: "Jan Kowal"
    },
    {
        id: 3,
        title: "Tytuł 3",
        text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima quis unde ratione quam non ea laudantium reprehenderit repellendus labore laboriosam libero rerum animi dolores, quo quod. Iure maxime laudantium neque.",
        author: "Janusz Kowalski"
    },
]

router.get('/', (req, res, next) => {
    res.json(DUMMY_ARTICLES)
})

module.exports = router