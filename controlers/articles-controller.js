const uuid = require('uuid/v4')
const HttpError = require('../models/http-error')

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

const getArticles = (req, res, next) => {
    res.json(DUMMY_ARTICLES)
}

const addArticle = (req, res, next) => {
    const { title, text, author } = req.body

    const newArticle = {
        id: uuid(),
        title,
        text,
        author
    }

    DUMMY_ARTICLES.push(newArticle)

    res.json(newArticle)
}

const updateArticle = (req, res, next) => {
    const articleId = req.params.aid
    const searchingArticle = DUMMY_ARTICLES.filter(article => article.id.toString() === articleId)

    if (searchingArticle.length === 0) {
        return next(
            new HttpError('Could not find an article for the provided id', 404)
        )
    }

    const { title, text } = req.body

    searchingArticle[0].text = text
    searchingArticle[0].title = title
    res.json(searchingArticle)
}

const deleteArticle = (req, res, next) => {

    const articleIdToDelete = req.params.aid
    const articleIndex = DUMMY_ARTICLES.findIndex(article => article.id.toString() === articleIdToDelete)
    DUMMY_ARTICLES.splice(articleIndex, 1)
    res.json({ message: 'Deleted place.' })
}

exports.getArticles = getArticles
exports.addArticle = addArticle
exports.updataArticle = updateArticle
exports.deleteArticle = deleteArticle