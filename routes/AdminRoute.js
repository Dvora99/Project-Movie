const express = require('express')
const admin = express.Router()
const AdminController = require('../controller/AdminController')
const AdminModel = require('../models/AdminModel')
const passport = require('passport')
const Admin = require('../models/AdminModel')

admin.get('/', passport.CheckAuthentication, AdminController.dashboard)

// Register

admin.get('/register', AdminController.register)
admin.post('/getRegister', AdminController.getRegister)

// ChangePass

admin.get('/ChangePassPage', AdminController.ChangePassPage)
admin.post('/ChangePassword', AdminController.ChangePassword)

//ForgetPass

admin.get('/getforgetemailpage', AdminController.getforgetemailpage)
admin.post('/checkemail', AdminController.checkemail)
admin.get('/OTPpage', AdminController.OTPpage)
admin.post('/checkotp', AdminController.checkotp)
admin.get('/forgetNewpass', AdminController.forgetNewpass)
admin.post('/forgetchangepass', AdminController.forgetchangepass)

// Login

admin.get('/login', AdminController.login)
admin.post('/getlogin', passport.authenticate('local', {failureRedirect : '/admin/login'}) ,AdminController.getlogin)

//logout

admin.get('/logout', AdminController.logout)

// Admin CRUD Operation

admin.get('/adminformpage', passport.CheckAuthentication ,AdminController.adminformpage)
admin.post('/insertAdminInfo', AdminModel.uploadPicture,passport.CheckAuthentication, AdminController.insertAdminInfo)
admin.get('/showAdmin', AdminModel.uploadPicture,passport.CheckAuthentication, AdminController.showAdmin)
admin.get('/DeleteData/:id', AdminModel.uploadPicture,passport.CheckAuthentication, AdminController.DeleteData)
admin.get('/UpdateDataPage/:id', AdminModel.uploadPicture,passport.CheckAuthentication, AdminController.UpdateDataPage)
admin.post('/UpdateData', AdminModel.uploadPicture,passport.CheckAuthentication, AdminController.UpdateData)

module.exports = admin