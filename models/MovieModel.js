const mongoose = require('mongoose')
const multer = require('multer')
const imgPoster = ('/img/MoviePoster')
const path = require('path')

const MovieSchema = mongoose.Schema({
    MovieName: {
        type: String,
        require: true
    },
    ScreenType: {
        type: Array,
        require: true
    },
    Language: {
        type: String,
        require: true
    },
    Duration: {
        type: String,
        require: true
    },
    MovieType: {
        type: Array,
        require: true
    },
    Date: {
        type: String,
        require: true
    },
    Price: {
        type: String,
        require: true
    },
    Description: {
        type: String,
        require: true
    },
    MoviePoster: {
        type: String,
        require: true
    },
    MovieBanner: {
        type: String,
        require: true
    },
})

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, '../assets' ,imgPoster))
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now())
    }
})

const a = multer({storage : storage})
MovieSchema.statics.uploadPicture = a.fields([{name : 'MoviePoster'}, {name : 'MovieBanner'}])
MovieSchema.statics.Imgpath = imgPoster

const Admin = mongoose.model('Movie-Data', MovieSchema)

module.exports = Admin