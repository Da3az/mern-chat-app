const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('./models/User');



// authenticated local strategy using username and password
passport.use(new LocalStrategy({ usernameField:'email'},(email,password,done)=>{

   
}));