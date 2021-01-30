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
             socket.broadcast.emit('data-update',type)
          });    
        });

        socket.on('logout',async ()=> {
          let type ='users-up'       
          socket.broadcast.emit('data-update',type)
         
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
              let type = 'users-up'
              socket.broadcast.emit('data-update',type)
              } 
          });
          
        })
        
        socket.on('user-register',() => {
          let type = 'users-up'
          socket.broadcast.emit('data-update',type)
        })
          
        socket.on('new-message',(roomId,content,targetId,username)=> {
          socket.to(targetId).broadcast.emit('message-sent',roomId,content,username)
        })
        
        socket.on('room-message',(roomId,content,username) => {
          socket.broadcast.emit('message-sent',roomId,content,username)
        })

        socket.on('rooms-change',(roomname)=>{
          var type = 'rooms-update'
          var info = roomname 
          socket.broadcast.emit('data-update',type,info)
        })
      
        socket.on('room-exit',(name,id)=>{
          socket.join(id)
          socket.broadcast.to(id).emit('room-exit',name.name)
        })
      });
      
    return ioRouter;
};