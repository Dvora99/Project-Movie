const mongoose = require('mongoose');

const TicketSchema = mongoose.Schema({
    showID :{
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Movie-Show',
        required : true
    },
    userID :{
        type : mongoose.Schema.Types.ObjectId,
        ref : 'User-Data',
        required : true
    },
    ticket : {
        type : Array,
        required : true
    },
    time : {
        type : String,
        required : true
    }
});

module.exports = mongoose.model('Ticket-Data',TicketSchema);