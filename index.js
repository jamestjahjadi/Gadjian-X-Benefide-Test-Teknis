const express = require('express')
const BodyParser = require('body-parser')
const cors = require('cors')
const PORT = process.env.PORT || 4200
const app = express()
const db = require('./connection/index')
const { employeerouter, functrouter } = require('./router')


db.connect(err => {
    if (err) throw err
    console.log('Server Intiation Success')
})

app.use(BodyParser.json())
app.use(BodyParser.urlencoded({ extended: false }))
app.use(cors())

app.use('/api', employeerouter)
app.use('/api',functrouter)


app.listen(PORT, console.log(`Welcome to port ${PORT}`))