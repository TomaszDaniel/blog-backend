const express = require('express')

const router = express.Router()
const { check } = require('express-validator')
const articlesControllers = require('../controlers/articles-controller')


router.get('/', articlesControllers.getArticles)

router.post('/',
    [
        check('title')
            .not()
            .isEmpty(),
        check('text')
            .isLength({ min: 20 })
    ],
    articlesControllers.addArticle)

router.patch('/:aid',
    [
        check('title')
            .not()
            .isEmpty(),
        check('text')
            .isLength({ min: 20 })
    ],
    articlesControllers.updataArticle)

router.delete('/:aid', articlesControllers.deleteArticle)

module.exports = router