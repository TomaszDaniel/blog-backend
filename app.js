const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const HttpError = require('./models/http-error')
const articlesRoute = require('./routes/articles-routes')
const usersRoute = require('./routes/users-routes')

const app = express()

app.use(bodyParser.json());

app.use('/api/articles', articlesRoute)
app.use('/api/users', usersRoute)

app.use((req, res, next) => {
    const error = new HttpError("Could not find this xroute", 404)
    throw error
})

app.use((error, req, res, next) => {
    if (res.headerSend) {
        return next(error)
    } else {
        res.status(error.code || 500)
        res.json({ message: error.message || "An unknow error occurred!" })
    }
})



mongoose
    .connect("mongodb+srv://tomek:blog123@blogcluster-led8m.mongodb.net/myblogapp?retryWrites=true&w=majority")
    .then(() => app.listen(5000))
    .catch(err => {
        console.log(err)
    })
