const express = require('express')
const port = 9999
const app = express()

const passport = require('passport')
const session = require('express-session')
const cookie = require('cookie-parser')

const passportLocal = require('./config/passport-local-stretagy')
const passportUserLocal = require('./config/passport-user-stretagy')
var db = require('./config/db')

app.set('view engine', 'ejs')

app.use(express.urlencoded())
app.use(express.static('assets'))
app.use(session({
    name : 'Movie',
    secret : '123',
    saveUninitialized : false,
    resave : true,
    cookie : {
        maxAge : 10000*1000*100*10
    }
}))
app.use(passport.initialize())
app.use(passport.session())
app.use(passport.Information)
app.use(cookie())

app.use('/', require('./routes/index'))

app.listen(port, (err) => {
    if(err)
    {
        console.log(err)
        return false
    }
    console.log('Server Is Running On',port)
})