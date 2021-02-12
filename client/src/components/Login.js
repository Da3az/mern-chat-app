import React , {useEffect,useState} from 'react'
import Icon from '@material-ui/core/Icon';
import '../styles/Login.css'
import axios from 'axios'
import {useDispatch,useSelector} from 'react-redux'
import {setUser,setAlert} from '../redux/actions'
import {useHistory} from 'react-router'
export default function Login({socket}) {
    const user = useSelector(state => state.user)
    const [loginEmail,setLoginEmail] = useState('')
    const [loginPassword,setLoginPassword] = useState('')
    const [registerEmail,setRegisterEmail] = useState('')
    const [registerPassword,setRegisterPassword] = useState('')
    const [userName,setUserName] = useState('')
    const dispatch = useDispatch()
    const history = useHistory()
    function switchMethod(target){
        var bird = document.getElementById('login__bird')
        var loginParents = document.getElementsByClassName('login__container__form')
        if(!bird.classList.contains('yellowBird')){bird.classList.remove('purpleBird');bird.classList.add('yellowBird')}else{bird.classList.remove('yellowBird');bird.classList.add('purpleBird')}
        for (let j = 0; j < loginParents.length; j++) {
            const element = loginParents[j];
            if(element === target.parentNode.parentNode){
                element.style.width = '0%'
                element.lastChild.classList.remove('shown')
            }else{
                element.style.width = '100%';
                element.lastChild.classList.add('shown')
                
            } 
        }
    }
    useEffect(() => {
            var leftForm = document.getElementsByClassName('login__left')
            leftForm[0].style.width = '100%';
            var loginSwitchers = document.getElementsByClassName('login__switch')
               
            for (let i = 0; i < loginSwitchers.length; i++) {
                const element = loginSwitchers[i];
                element.addEventListener('click',(e) => switchMethod(e.currentTarget))        
            }
    },[])

    async function register(e){
        e.preventDefault();
        await axios.post("/user/register",{
            username:userName,
            email:registerEmail,
            password:registerPassword
         }).then(res => {
                const {type,message} = res.data            
                dispatch(setAlert({type,message}))
                var registerSpan = document.getElementsByClassName('login__switch')[1]
                if(type==='success') {
                   switchMethod(registerSpan)
                   socket.emit('user-register')
                }
            })
            .catch((err,message) => console.log(err,message));
      }

    async function login(e){
        e.preventDefault();
      
        await axios.post("/user/login",{
            email:loginEmail,
            password:loginPassword
        }).then(res => {
            const {type,message,user} = res.data     
            dispatch(setAlert({type,message}))
            if(user){
                socket.emit('user-signin',user.id,user.username)
                dispatch(setUser({...user,state:true}))
                history.push('/')
            }
        })
        .catch(error => console.log(error));
    }

    
    return (
        <>
        { user.state !== false  ?   history.push('/')

                                :
                
        
         <div className='login' key = 'login'>
            <div className="login__container">
                    <Icon className="fa fa-kiwi-bird " id='login__bird' ></Icon>
                    <div key = 'login' className="login__container__form login__left login__select">
                        <h1>Log-in</h1>
                        <form onSubmit = {(e) => login(e)}>
                            <label htmlFor="loginEmail">Email</label>
                            <input name='loginEmail' type="email" value={loginEmail} onChange = {(e) => setLoginEmail(e.target.value) } required/>
                            <label htmlFor="loginPassword">Password</label>
                            <input type="password" name ='loginPassword' value={loginPassword} onChange = {(e) => setLoginPassword(e.target.value)} required/>
                            <button>Login</button>
                        </form>
                        <p>-Not registered yet <span className='login__switch'>Register</span> </p>
                </div>                                     
                    <div key = 'register' className="login__container__form login__right">
                        <h1>Register</h1>
                        <form onSubmit = {(e) => register(e)}>
                            <label htmlFor="username">Username</label>
                            <input name='username' type="text" value={userName} onChange = {(e) => {setUserName(e.target.value)}} required  />
                            <label htmlFor="registerEmail">Email</label>
                            <input name='registerEmail' type="email" value={registerEmail} onChange = {(e) => setRegisterEmail(e.target.value)} required/>
                            <label htmlFor="registerPassword">Password</label>
                            <input type="password" name ='registerPassword' value={registerPassword} onChange = {(e) => setRegisterPassword(e.target.value)} required/>
                            <button type='submit' >Register</button>
                        </form>
                        <p>-Already have an account <span className='login__switch'>Log-in</span> </p>
                    </div>                 
            </div>
        </div>
        }   
        </>
       
    )
}
