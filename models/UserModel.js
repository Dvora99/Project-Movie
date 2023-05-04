const mongoose = require('mongoose')
const path = require('path')

const UserSchema = mongoose.Schema({
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
    ticket :{
        type : [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref : 'Ticket',
                required : true
            }
        ]
    },
})

const User = mongoose.model('User-Data', UserSchema)

module.exports = User