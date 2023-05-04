const mongoose = require('mongoose');

const ShowSchema = mongoose.Schema({
    MovieID :{
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Movie-Data',
        required :true
    },
    MallID :{
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Mall-Data',
        required :true
    },
    Time :{
        type : [],
        required : true
    }
});


module.exports = mongoose.model('Movie-Show',ShowSchema);