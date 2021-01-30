const mongoose = require('mongoose');


const MessageSchema = new mongoose.Schema({
    content :{
        type : String,
        required : true,
    },
    sender:{
        type:String,
        required : true
    },
    senderName:{
        type:String,
        required : true
    },
    receiver:{
        type:String,
        required:true
    },
    date:{
        type:String,
        required:true
    },
    roomName:{
        type:String,
        required:true 
    }
});



module.exports = mongoose.model(' Message', MessageSchema);