const mongoose = require('mongoose');

const MallSchema = mongoose.Schema({
    name :{
        type : String,
        required :true
    }
});


module.exports = mongoose.model('Mall-Data',MallSchema);