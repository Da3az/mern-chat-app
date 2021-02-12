import React from 'react'
import axios from 'axios';
import {useDispatch,useSelector} from 'react-redux'
import {setUser} from '../redux/actions'
import {useHistory} from 'react-router'
import Icon from '@material-ui/core/Icon';
import '../styles/Nav.css'


export default function Nav() {
    const dispatch = useDispatch()
    const user = useSelector(state => state.user)
    const socket = useSelector(state => state.socket)
    const history = useHistory()
    function logout(){
     axios.post('/user/logout',{id:user.id})
     socket.emit('user-logout')
     dispatch(setUser({state:false}))
     history.push('/auth')
    }
     

    return (
        <div className = 'nav'>
            <div className="nav__logo">
              <Icon className="fa fa-kiwi-bird " ></Icon>
            </div>
            <div className="nav__navbar">
                <div className="nav__user">Welome {
                  user.username
                }
                </div>
                
                 <button className="mav__logout" onClick = {() => logout()}>Log-out <Icon className="fa fa-sign-out-alt " ></Icon> </button>
                              
            </div>
        </div>
    )
}
