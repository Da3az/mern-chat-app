import React,{useEffect} from 'react'
import axios from 'axios'
import Nav from './Nav'
import Left from './Left'
import Right from './Right'
import {useHistory} from 'react-router'
import {useSelector,useDispatch} from 'react-redux'
import {setUsers,setRooms, setTarget} from '../redux/actions'
import '../styles/Home.css'




export default function Home({socket}) {
     const dispatch = useDispatch()
     const user = useSelector(state => state.user)
     const target = useSelector(state => state.target)
     const history = useHistory() 
   
     
    useEffect(() => {
        if(user.state){
            axios.get('/chat/rooms').then(res => {dispatch(setRooms(res.data))}).catch(err => console.log(err))
            axios.get('/chat/users').then(res => {dispatch(setUsers(res.data))}).catch(err => console.log(err))
        } 
    },[user,dispatch])

 
    useEffect(() => {

        socket.on('rooms-update',(name) => {
        if(name === target.roomname){history.push('/');setTarget({id:'',roomname:'',username:'',type:''})}
        axios.get('/chat/rooms').then(res => {dispatch(setRooms(res.data))}).catch(err => console.log(err))
      })

      socket.on('users-up',() => {
        axios.get('/chat/users').then(res => {dispatch(setUsers(res.data))}).catch(err => console.log(err))
      })

    },[socket,target,history,dispatch])

    return (
        <>
        {user.state 
            ?
            <div className = 'home'>
                <Nav key = 'nav '></Nav>
                <div className="home__body">
                <Left key = 'left'></Left>
                <Right key = 'right'></Right>
                </div>
            </div>
            :
            history.push('/auth')
        }
        </>
    )
}
