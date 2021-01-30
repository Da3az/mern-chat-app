const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const UserSchema = new mongoose.Schema({
    username :{
        type : String,
        required : true,
        minLength : [4, '{PATH} length is beneath the limit of `{MINLENGTH}` letters.'],
        maxLength : [15, '{PATH} length exceeds the limit of `{MAXLENGTH}` letters.']
    },
    password : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required: true
    },
    connected :{
        type:Boolean,
        required: true
    },
    socketId:{
       type:String,
       required : false    
    }
});

UserSchema.pre('save',function(next){
    if(!this.isModified('password'))
        return next();
    bcrypt.hash(this.password,10,(err,passwordHash)=>{
        if(err)
            return next(err);
        this.password = passwordHash;
        next();
    });
});

UserSchema.methods.comparePassword = function(password,cb){
    bcrypt.compare(password,this.password,(err,isMatch)=>{
        if(err)
            return cb(err);
        else{
            if(!isMatch)
                return cb(null,isMatch,'Incorrect password');
            return cb(null,this);
        }
    });
}

module.exports = mongoose.model('User',UserSchema);