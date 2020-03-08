const express = require('express')

const router = express.Router()
const articlesControllers = require('../controlers/articles-controller')


router.get('/', articlesControllers.getArticles)

router.post('/', articlesControllers.addArticle)

router.patch('/:aid', articlesControllers.updataArticle)

router.delete('/:aid', articlesControllers.deleteArticle)

module.exports = router