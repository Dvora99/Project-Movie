const Moviedb = require('../models/MovieModel')
const Malldb = require('../models/MallModel')
const MovieInMall = require('../models/MovieInMallModel')
const ShowModel = require('../models/ShowModel')

module.exports.MoviePage = (req,res) => {
    return res.render('Movie-Form')
}

module.exports.insertMovieInfo = async(req,res) => {
    // console.log(req.files)
    if(req.files)
    {
        req.body.MoviePoster = Moviedb.Imgpath + '/' + req.files.MoviePoster[0].filename
        req.body.MovieBanner = Moviedb.Imgpath + '/' + req.files.MovieBanner[0].filename
    }
    let data = await Moviedb.create(req.body)
    return res.redirect('back')
}

module.exports.ShowMovie = async (req,res) => {
    let data = await Moviedb.find({})

    return res.render('Show-Movie',{
        data : data
    })
}

module.exports.AddmallPage = (req,res) => {
    return res.render('AddMall')
}

module.exports.insertMallInfo = async(req,res)=>{
    let data = await Malldb.create(req.body);

    if(data)
    {
        return res.redirect('back');
    }
    console.log('Can not add Mall');
    return res.redirect('back');
}

module.exports.AddMovieMallPage = async(req,res)=>{
    let getMovie = await Moviedb.find({})
    let getMall = await Malldb.find({})

    return res.render('AddMovieInMall',{
        movie : getMovie,
        mall : getMall
    })
}

module.exports.InsertMovieInMallInfo = async(req,res)=>{
    let data = await MovieInMall.create(req.body);

    return res.redirect('back')
}

module.exports.AddMovieShowPage = async(req,res)=>{
    let data = await Moviedb.find({})

    return res.render('AddShows',{
        movie : data
    })
}

module.exports.GetMovieDetails = async(req,res)=>{
    let data = await MovieInMall.find({MovieID : req.body.MovieID}).populate('MallID').exec()

    return res.render('Options',{
        mall : data
    });
}

module.exports.InsertShow = async(req,res)=>{
    let data = await ShowModel.find({
        $and:[
            {MovieID : req.body.MovieID},
            {MallID :req.body.MallID}
        ]
    });

    if(data?.length)
    {
        let AddShow = await ShowModel.findByIdAndUpdate(data[0].id,{
            $push: {
                Time: req.body.Time
            }
        });
        return res.redirect('back')
    }
    else{
        let AddShow = await ShowModel.create(req.body);

        return res.redirect('back');
    }
}