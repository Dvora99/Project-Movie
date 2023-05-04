const passport = require('passport')
const passportLocal = require('passport-local').Strategy
const Admin = require('../models/AdminModel')
const UserModel = require('../models/UserModel')
const User = require('../models/UserModel')

passport.use(new passportLocal({
    usernameField : 'email'
}, async (email,password,done) => {
    let data = await Admin.findOne({email : email})
    // console.log(data)
    if(!data || data.password != password)
    {
        console.log('Data Not Found')
        return done(null,false)
    }
    else{
        return done(null,data)
    }
}))

passport.serializeUser( (data,done) => {
    // console.log(data);
    
    return done(null,data.id)
})

passport.deserializeUser( async (req,id,done) => {
    // console.log(req.session.passport.user)
    let data = await Admin.findById(id)
    let user = await UserModel.findById(id)
    // console.log('WorkedNot')

    if(!data)
    {
        let Userdata = await UserModel.findById(id)
        return done(null,Userdata)
    }
    else{

        return done(null,data)
    }
})

passport.CheckAuthentication = (req,res,next) => {
    if(req.isAuthenticated())
    {
        // console.log('123')
        return next()
    }
    // console.log('1')
    return res.redirect('/admin/login')
}

passport.Information = (req,res,next) => {
    res.locals.user = req.user
    next();
}

module.exports = passport