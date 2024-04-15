const express = require('express')
const expressHandlebars = require('express-handlebars')

// private libraries
// const fortune = require('./lib/fortune')
const handlers = require('./lib/handlers')

const port = process.env.PORT || 3000
const app = express()

// app config

// configure Handlebars view engine
app.engine('handlebars', expressHandlebars.engine({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')
app.use(express.static(path.join(__dirname, '/public')))


app.listen(port, ()=>{
    console.log(`running ... http://localhost:${port}`)
})