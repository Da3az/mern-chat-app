import React from 'react'
import '../styles/Room.css'
import {useHistory} from 'react-router'
import {useDispatch,useSelector} from 'react-redux'
import {setTarget,setRooms,setRoomName,setMessages} from '../redux/actions'
import Icon from '@material-ui/core/Icon';
import axios from 'axios'

export default function Room({room,selectUser,edit}) {

    const dispatch = useDispatch()
    const history = useHistory()
    const user= useSelector(state => state.user.username)
    const socket = useSelector(state => state.socket)
    const target = useSelector(state => state.target)
     

    function settingTarget(){
        const {_id,roomname} = room
        history.push('/rooms/'+room.roomname)
        dispatch(setRoomName(roomname))
        dispatch(setTarget({
          id:_id,
          roomname,
          type:'room'
        }))
        axios.post('/chat/messages',{roomName:roomname}).then((res => {
            if(res.data.length) dispatch(setMessages(res.data))
            else  dispatch(setMessages([0]))
        })).catch(err => console.log(err))        
    }
    
    async function removeRoom(){
        await axios.post('/chat/deleteroom',{roomname:room.roomname}).then(res => 
            {
               axios.get('/chat/rooms').then(res => {
                   dispatch(setRooms(res.data))
                   if(room.roomname === target.roomname){history.push('/')}
                }).catch(err => console.log(err))
               socket.emit('rooms-change',room.roomname )
             }
            )
    }
    
    return (
        <div key = {'room'+room._id} className = 'user room' onClick = {(e) => { selectUser(e.currentTarget);settingTarget()}}>
            <p>{room.roomname}</p>
            {edit && room.creator === user && <button onClick = {() => removeRoom()}><Icon className="fa fa-minus " ></Icon></button>}
        </div>
    )
}
