const express = require('express');
const chatRouter = express.Router();
const User = require('../models/User');
const Room = require('../models/Room');
const Message = require('../models/Message');

chatRouter.get('/users',async (req,res)=>{
   const users =await User.find({},{_id:1,username:1,connected:1})
    res.json(users);
});

chatRouter.post('/addroom', async(req,res) => {
    const {roomname,creator} = req.body
    Room.findOne({roomname},(err,room) => {
        if(room)
            res.status(201).json({message : "a room already exist with this name", type:'warning'});
        else{
            const newRoom = new Room({roomname,creator});
            newRoom.save(err=>{
                if(err){
                    res.status(500).json({message : {msgBody : "Error has occured", msgError: true}});
                }else
                    res.status(201).json({message : "Room successfully created", type:'success'});
            });
        }
    });
})

chatRouter.post('/deleteroom', async(req,res) => {
    const {roomname} = req.body
    Room.findOne({roomname},(err,room) => {
        if(room)
            Room.deleteOne({roomname},(err,obj) => {
                if(err)
                    res.status(500).json({message : "Error has occured", msgError: true});
                else{
                    res.status(201).json({message : "Room removed", type:'success'});
                } 
            })
        else{
            res.status(500).json({message : "Error has occured", msgError: true});
        }
    });
})

chatRouter.get('/rooms',async (req,res)=>{
    const users = await Room.find({})
     res.json(users);
 });
 


chatRouter.get('/authenticated',(req,res)=>{
    const {username,_id,email} = req.user;
    res.status(200).json({isAuthenticated : true, user : {username,_id,email}});
});



chatRouter.post('/message',async (req,res) => {   
  const newMessage = new Message(req.body)
  newMessage.save((err) => {
      if(err)
        {res.json(err)}
      else res.json('message success')  
  })
})

chatRouter.post('/messages',async (req,res) => {
    var room = req.body.roomName
    const messages = await Message.find({roomName: room},(err,docs) => {
        if(err)
          {res.json(err)}
    })
    res.json(messages);
})

module.exports = chatRouter;

