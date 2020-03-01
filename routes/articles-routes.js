const express = require('express')
const uuid = require('uuid/v4')

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

router.post('/', (req, res, next) => {
    console.log(req.body)
    const { title, text, author } = req.body

    const newArticle = {
        id: uuid(),
        title,
        text,
        author
    }

    DUMMY_ARTICLES.push(newArticle)

    res.json(newArticle)
})

router.patch('/:aid', (req, res, next) => {
    const articleId = req.params.aid
    const searchingArticle = DUMMY_ARTICLES.filter(article => article.id.toString() === articleId)

    const { title, text } = req.body

    searchingArticle[0].text = text
    searchingArticle[0].title = title
    res.json(searchingArticle)
})

router.delete('/:aid', (req, res, next) => {

    const articleIdToDelete = req.params.aid
    const articles = DUMMY_ARTICLES.filter(article => article.id.toString() !== articleIdToDelete)
    res.json({ message: 'Deleted place.' })
})

module.exports = router