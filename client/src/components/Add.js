import React,{useState} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {setAlert ,setRooms} from '../redux/actions'
import axios from 'axios'
import '../styles/Add.css'

export default function Add({cancel}) {
    const dispatch = useDispatch()
    const user = useSelector(state => state.user.username)
    const socket = useSelector(state => state.socket)
    const [roomname,setRoomname] =  useState('')  
    function click(e){
        if(document.getElementsByClassName('add')[0] ===  e.target){
            cancel()
        }
    }
   
    async function addRoom(e){
        if(roomname.length < 4){
            dispatch(setAlert({
             type:'warning',
             message:'Room name must be at least 4 letters'
            }))
        }else if(roomname.length > 10){
            dispatch(setAlert({
             type:'warning',
             message:'Room name can\'t have more than 10 letters'
            }))
        }else{  
            await axios.post('/chat/addroom',{roomname,creator:user}).then(res => {
                if (res.data.type !=='warning') {
                    dispatch(setAlert(res.data)) ;
                    cancel();
                    axios.get('/chat/rooms').then(res => {dispatch(setRooms(res.data))}).catch(err => console.log(err))
                    socket.emit('rooms-change')
                }else {dispatch(setAlert(res.data))}
            }).catch(err => console.log(err)) 
        }
    }  
    return (
        <div className = 'add' onClick = {(e) => click(e)}>
            <div className="add__container">
              <div className="add__form">
               <label htmlFor="">Enter a name for the new room</label> 
              </div>
              <input type="text" value = {roomname} onChange = {(e) => setRoomname(e.target.value)}></input>
              <button id = 'add__button' onClick = {(e) => addRoom(e)}>Add</button>
            </div>
        </div>
    )
}
