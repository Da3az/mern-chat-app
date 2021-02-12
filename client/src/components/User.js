import React from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {useHistory} from 'react-router'
import {setTarget,setRoomName,setMessages} from '../redux/actions'
import axios from 'axios'
import '../styles/User.css'


export default function User({user,selectUser}) {
        const dispatch = useDispatch()
        const history = useHistory()
        const currentUser = useSelector(state => state.user)
    
        function settingRoomName(){
          var roomname 
          if(currentUser.username > user.username){
              roomname = currentUser.username + '&' +  user.username
           }else{roomname = user.username + '&' + currentUser.username}
          dispatch(setRoomName(roomname))
          axios.post('/chat/messages',{roomName:roomname}).then((res => {
            if(res.data.length) dispatch(setMessages(res.data))
            else  dispatch(setMessages([0]))
          })).catch(err => console.log(err))          
       }

        function settingTarget(){
          const {_id,username} = user
          history.push('/users/'+user.username)
          settingRoomName()
          dispatch(setTarget({
            id:_id,
            username,
            type:"user"
          }))
          
        }
        
        return (
        <div key = {'user'+user._id} className='user' onClick={(e) => { selectUser(e.currentTarget);settingTarget()}}>
          <p>{user.username}
          {user.connected ? <span style = {{'background' : '#33d933'}}></span> : <span style = {{'background' : 'red'}}></span>}
          </p>
        </div>
    )
}
