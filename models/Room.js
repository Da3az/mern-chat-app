const mongoose = require('mongoose');


const RoomSchema = new mongoose.Schema({
    roomname :{
        type : String,
        required : true,
        minLength:4,
        maxLength:10
    },
    creator:{
        type:String,
        required:true
    }
 
});



module.exports = mongoose.model('Room',RoomSchema);