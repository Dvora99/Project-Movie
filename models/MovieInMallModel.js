const mongoose = require('mongoose');

const mallSchema = mongoose.Schema({
    MovieID :{
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Movie-Data',
        required :true
    },
    MallID :{
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Mall-Data',
        required :true
    }
});


module.exports = mongoose.model('MovieInMall',mallSchema);