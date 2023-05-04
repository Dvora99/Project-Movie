const mongoose = require('mongoose')
const multer = require('multer')
const img = ('/img/AdminPicture')
const path = require('path')

const AdminSchema = mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    city: {
        type: String,
        require: true
    },
    gender: {
        type: String,
        require: true
    },
    hobby: {
        type: Array,
        require: true
    },
    description: {
        type: String,
        require: true
    },
    ProfilePicture: {
        type: String,
        require: true
    },
})

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, '../assets/' ,img))
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now())
    }
})

AdminSchema.statics.uploadPicture = multer({ storage: storage }).single('ProfilePicture')
AdminSchema.statics.Imgpath = img

const Admin = mongoose.model('Admin-Data', AdminSchema)

module.exports = Admin