const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('./models/User');



// authenticated local strategy using username and password
passport.use(new LocalStrategy({ usernameField:'email'},(email,password,done)=>{

    User.findOne({email},(err,user)=>{
        // something went wrong with database
        if(err)
            return done(err);
        // if no user exist
        if(!user)
            return done(null,false,'User not found');
        // check if password is correct
        user.comparePassword(password,done);
        
    });
}));