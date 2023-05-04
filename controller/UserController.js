const UserModel = require('../models/UserModel')
const MovieModel = require('../models/MovieModel')
const ShowModel = require('../models/ShowModel')
const TicketModel = require('../models/TicketModel')

module.exports.userpage = async (req, res) => {
    let data = await MovieModel.find({})

    return res.render('UserPage', {
        Movie: data
    })
}

module.exports.UserRegister = async (req, res) => {
    let data = await UserModel.create(req.body)
    return res.redirect('/UserLoginPage')
}

module.exports.MoreDetails = async (req, res) => {
    let data = await MovieModel.findById(req.params.id)

    return res.render('OneMovieDetails', {
        Movie: data
    })

}

module.exports.MovieShow = async (req, res) => {
    let data = await ShowModel.find({ MovieID: req.params.id }).populate('MallID').exec();
    return res.render('FrontMovieShow', {
        Shows: data
    })
}

module.exports.BookSeat = async (req, res) => {
    let data = await ShowModel.findById(req.params.id).populate('MovieID').exec();
    let booking = await TicketModel.find({
        $and: [
            { showID: req.params.id },
            { time: req.query.time }
        ]
    })
    if (data) {
        let findTime = data.Time.forEach(e => {
            if (e == req.query.time) {
                return res.render('BookTicket', {
                    data: data,
                    time: req.query.time,
                    seat: booking
                });
            }
        })
    }
}

module.exports.UserSeat = async (req, res) => {
    req.body.userID = req.user.id

    let data = await TicketModel.create(req.body);

    if (data) {
        let BTicket = await UserModel.findByIdAndUpdate(req.user.id, {
            $push: {
                Ticket: data.id
            }
        });
        if (BTicket) {
            return res.redirect('/');
        }
        return res.redirect('back');
    }
    return res.redirect('back');
}

module.exports.UserRegisterPage = (req, res) => {
    return res.render('UserRegister')
}

module.exports.UserLoginPage = (req, res) => {
    return res.render('UserLogin')
}

module.exports.UserLogin = (req, res) => {
    return res.redirect('/')
}

module.exports.userLogOut = (req, res) => {
    req.logout((err) => {
        if (err) {
            console.log(err)
            return false
        }
        return res.redirect('/UserLoginPage')
    })
}