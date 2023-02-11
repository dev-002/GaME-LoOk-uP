const express = require('express')
const expressLayout = require('express-ejs-layouts')

const app = express()

app.set('view engine', 'ejs')
app.set('views', __dirname+'/views')
app.set('layout', 'layouts/layout')
app.use(expressLayout)
app.use(express.static('public'))

// Routes
const indexRoute = require('./routes/index')

app.use('/', indexRoute)

app.listen( process.env.PORT || 3000, console.log('Server Running...') )