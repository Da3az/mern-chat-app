const express = require('express');
const ioRouter = express.Router();
const User = require('../models/User');
const cors = require('cors')

ioRouter.use(cors())

module.exports = function (io) {


    //Socket.IO
    io.on('connection', (socket) => {
        socket.on('disconnect',async ()=> {
          let socketId = socket.id
          await User.findOneAndUpdate({socketId:socketId}, {connected:false}).then(() => {
            let type ='users-up'
             socket.broadcast.emit('users-up')
          });    
        });

        socket.on('user-signin',(id) => {
          socket.join(id)
          var socketId = socket.id
          User.findByIdAndUpdate(id, {connected:true,socketId},
            function (err, docs) { 
              if (err){ 
              console.log(err) 
              } 
              else{ 
              socket.broadcast.emit('users-up')
              } 
          });
          
        })
        
        socket.on('user-register',() => {
          socket.broadcast.emit('users-up')
        })

        socket.on('user-logout',() => {
          socket.broadcast.emit('users-up')
        })
          
        socket.on('new-message',(roomName,content,targetId,username)=> {
          console.log('new-message',targetId)
          console.log('roomName:', {roomName,content,username})
          socket.to(targetId).broadcast.emit('message-sent',{roomName,content,username})
        })
        
        socket.on('room-message',(roomName,content,username) => {
          socket.broadcast.emit('message-sent',{roomName,content,username})
        })

        socket.on('rooms-change',(roomname)=>{
          socket.broadcast.emit('rooms-update',roomname)
        })
      
        socket.on('room-exit',(name,id)=>{
          socket.join(id)
          socket.broadcast.to(id).emit('room-exit',name.name)
        })
      });
      
    return ioRouter;
};