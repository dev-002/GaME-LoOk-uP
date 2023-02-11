const express = require('express')
const bodyParser = require('body-parser')
const expressLayout = require('express-ejs-layouts')

const app = express()

app.set('view engine', 'ejs')
app.set('views', __dirname+'/views')
app.set('layout', 'layouts/layout')
app.use(expressLayout)
app.use(express.static('public'))
app.use(bodyParser.urlencoded({extended: true}))

// Routes
const indexRoute = require('./routes/index')
const searchRoute = require('./routes/search')

app.use('/', indexRoute)
app.use('/search', searchRoute)

app.listen( process.env.PORT || 5000, console.log('Server Running...') )