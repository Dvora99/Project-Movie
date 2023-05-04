const express = require('express')
const route = express.Router()
const userController = require('../controller/UserController')
const passport = require('passport')

route.get('/', passport.CheckAuth, userController.userpage)
route.get('/MoreDetails/:id', passport.CheckAuth, userController.MoreDetails)
route.get('/MovieShow/:id', passport.CheckAuth, userController.MovieShow)
route.get('/BookSeat/:id',passport.CheckAuth, userController.BookSeat);
route.post('/UserSeat',passport.CheckAuth, userController.UserSeat);


route.get('/UserLoginPage', userController.UserLoginPage)
route.post('/UserLogin', passport.authenticate('User', { failureRedirect: '/UserLoginPage' }), userController.UserLogin)
route.get('/UserRegisterPage', userController.UserRegisterPage)
route.post('/UserRegister', userController.UserRegister)
route.get('/userLogOut', userController.userLogOut)

// Other Route

route.use('/admin', require('./AdminRoute'))
route.use('/Movie', require('./MovieRoute'))

module.exports = route