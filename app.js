const express = require('express')
const bodyParser = require('body-parser')
const articlesRoute = require('./routes/articles-routes')
const usersRoute = require('./routes/users-routes')

const app = express()

app.use(bodyParser.json());

app.use('/api/articles', articlesRoute)
app.use('/api/users', usersRoute)

app.listen(5000)