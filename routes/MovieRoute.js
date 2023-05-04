const express = require('express')
const route = express.Router()
const MovieController = require('../controller/MovieController')
const moviedb = require('../models/MovieModel')

route.get('/MoviePage', MovieController.MoviePage)
route.post('/insertMovieInfo', moviedb.uploadPicture, MovieController.insertMovieInfo)
route.get('/ShowMovie', moviedb.uploadPicture ,MovieController.ShowMovie)

route.get('/AddmallPage', MovieController.AddmallPage)
route.post('/insertMallInfo', MovieController.insertMallInfo)

route.get('/AddMovieMallPage', MovieController.AddMovieMallPage)
route.post('/InsertMovieInMallInfo', MovieController.InsertMovieInMallInfo)

route.get('/AddMovieShowPage', MovieController.AddMovieShowPage)
route.post('/GetMovieDetails', MovieController.GetMovieDetails)
route.post('/InsertShow', MovieController.InsertShow)

module.exports = route