const express = require('express');
const userRouter = express.Router();
const passport = require('passport');
const passportConfig = require('../passport');
const User = require('../models/User');



userRouter.post('/register',(req,res)=>{
    const { username,password,email } = req.body;
    User.findOne({email},(err,user)=>{
        if(err)
            res.status(500).json({message : "Error has occured", msgError: true});
        if(user)
            res.status(201).json({message : "Email is already registered", type: 'warning'});
        else{
            User.findOne({username},(err,user)=>{
                if(err)
                    res.status(500).json({message : "Error has occured", msgError: true});
                if(user)
                    res.status(201).json({message : "Username is already taken", type:'warning'});
                else{
                    const newUser = new User({username,password,email,connected:false});
                    newUser.save(err=>{
                        if(err){
                            if(err.message.includes('User validation failed: username')){
                                res.status(201).json({message : 'username length must be between 4 and 15 letters', type:'warning'});
                            }else{
                            res.status(500).json({message : {msgBody : "Error has occured", msgError: true}});
                            }
                        }else
                            res.status(201).json({message : "Account successfully created", type:'success'});
                    });
                }
            });
        }
    })
    
});



userRouter.post('/login', function(req, res, next) {
    passport.authenticate('local',{session:false}, function(err, user, info) {
      if (err) { return next(err); }
      if (!user) { return res.status(200).json({message:info,type:'error'}); }
      const {_id,username,email,connected} =user;
      console.log(connected)
      if(connected) {
        return res.status(200).json({message:'User already connected',type:'error'})
      }else{
        res.status(200).json({isAuthenticated : true,user : {id:_id,username,email}});
      }    
    })(req, res, next);
  });

userRouter.post('/logout',(req,res) => {
    const id = req.body.id
    User.findByIdAndUpdate(id, {connected:false},
        function (err, docs) { 
          if (err){ 
          console.log(err) 
          } 
          else{ 
          console.log("Updated User : ", docs); 
          } 
    });
})


module.exports = userRouter;