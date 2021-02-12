import React,{useEffect,useState} from 'react'
import {useSelector} from 'react-redux'
import axios from 'axios'
import '../styles/Chatroom.css'
export default function Chatroom() {
     const socket = useSelector(state => state.socket)
     const target = useSelector(state => state.target)
     const user = useSelector(state => state.user)
     const roomName = useSelector(state => state.roomName)
   //   const [messages,setMessages] = useState([])
     const messages = useSelector(state => state.messages)
     const [message,setMessage] = useState('')
     const [chat,setChat] = useState([])

     function send(){
         sendMessage()
         var targetId =target.id
         var username = user.username
         var userId = user.id
         axios.post('/chat/message',{
            content:message,
            sender:userId,
            senderName:username,
            receiver:targetId,
            date:new Date(Date.now()).toUTCString(),
            roomName:roomName
         })
     }

     function sendMessage(){
      if(message !== ''){
         setChat([...chat,<div key = {Date.now()} className="chat__message chat__messageOut">
                                 <small>You</small>
                                 <p>{message}</p>
         </div>])
         if(target.type !== 'room'){
            let targetId = target.id
            socket.emit('new-message',roomName,message,targetId,user.username)
         }else{
            socket.emit('room-message',roomName,message,user.username)
         }
      }     
     }
       
     useEffect(() => {
        if(roomName !== ''){
          setChat([])
        } 
      },[roomName])
 
     useEffect(function(){
        socket.on('message-sent',function(messageIn){
         if(messageIn.roomName === roomName){
            if(messageIn.content !== ''){
               setChat([...chat,
                  <div key = {Date.now()} className="chat__message chat__messageIn">
                     <small>{messageIn.username}</small>
                     <p>{messageIn.content}</p>
                  </div>])
            }     
           }
        })
        socket.on('room-message',(roomMessage)=>{
         if(roomMessage.roomId === roomName){
            if(roomMessage.content !== ''){
               setChat([...chat,
                  <div key = {Date.now()} className="chat__message chat__messageIn">
                     <small>{roomMessage.username}</small>
                     <p>{roomMessage.content}</p>
                  </div>])
            }     
           }
          })
         },[socket,roomName,chat])

         return (
         <div id = 'chatRoom'>
            <div id="chatBody">
               {
               messages[0] ?    
                  messages?.sort((a,b) => a > b).map(
                     message => {
                        return  message.sender !== user.id ? <div key = {message._id} className = 'chat__message chat__messageIn'>
                                                                  <small>{message.senderName}</small> 
                                                                  <p>{message.content}</p>
                                                               </div>
                                                               : <div key = {message._id} className = 'chat__message chat__messageOut'>
                                                                  <small>You</small> 
                                                                  <p>{message.content}</p>
                                                               </div>
                     }
                     )
                     : messages[0] === 0 ? null
                                       : <div>reloading......</div>
                     }
                  {chat?.map( el => el)}
            </div>
         <div className="right__send">
                <input type="text" onChange={(e) => {setMessage(e.target.value)}}/><button onClick = {() => send()}>Send</button>
         </div>
        </div>
    )
}
