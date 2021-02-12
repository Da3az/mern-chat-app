import React , {useState} from 'react';
import {useSelector} from 'react-redux'
import User from './User'
import Room from './Room'
import Add from './Add'
import '../styles/Left.css'
import Icon from '@material-ui/core/Icon';

export default function Left() {
    
    const [add,setAdd] = useState(false)
    const [edit,setEdit] = useState(false)
    const users = useSelector(state => state.users)
    const rooms = useSelector(state => state.rooms)
    const id = useSelector(state => state.user.id)
    function selectUser(user) {
     let users = document.getElementsByClassName('user')
     for (let i = 0; i < users.length; i++) {
         const element = users[i];
         element.classList.remove('user__selected')
     }
     user.classList.add('user__selected')
    }

    function cancel(e){
       setAdd(!add)
    }
          
    return (
        <div className = 'left'>
            <div key = 'users' className="left__users">
                <h2><i className="fas fa-users"></i>Users</h2>
                <div>
                    {users.map(user => {
                    if (user._id !== id){
                     return <User key = {user._id } user = {user}  selectUser = {selectUser}></User>
                    }else{ return null}
                    })}
                </div>
            </div>
            <div key ='rooms' className="left__rooms">
                <h2><i className="fab fa-houzz"></i>Rooms <button onClick = {() => setAdd(!add)} >  <Icon className="fa fa-plus " ></Icon></button> <button onClick = {() => setEdit(!edit)} >  <Icon className="fa fa-pen " ></Icon></button> </h2>
                <div>
                    {rooms.map(room => <Room key = {room.id} edit = {edit} room = {room} selectUser = {selectUser} ></Room>)}
                </div>
            </div>
            {add ? <Add key = 'add' cancel={cancel}></Add> : null}
        </div>
    )
}
