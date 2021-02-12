import '../styles/App.css';
import React,{useEffect}  from 'react'
import Home from './Home'
import Login from './Login'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import {useDispatch,useSelector} from 'react-redux'
import {setTarget} from '../redux/actions'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



export default function App() {
  const dispatch = useDispatch()
  const user = useSelector(state => state.user)
  const alert = useSelector(state => state.alert)
  const socket = useSelector(state => state.socket)
  useEffect(() => {
    dispatch(setTarget({type:'',id:'',roomname:'',username:''}))
  },[user.id,dispatch])

  useEffect(() => {
        switch (alert.type) {
            case 'success':
                toast.success(alert.message, {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    });
                break;
            case 'warning':
                toast.warn(alert.message, {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    });
                break;
            case 'error':
                toast.error(alert.message, {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    });
                break;    
            default:
                break;
        }
       
    },[alert])

  return (
    <div className="app" id="app">
     <ToastContainer />
        <Router>
          <Switch>
              <Route path = '/auth'>
                <Login key ='login' socket = {socket}></Login>
              </Route>
              <Route path = '/'>
                <Home key = 'home' socket = {socket}></Home>
              </Route> 
          </Switch>                                    
        </Router>
     
    </div>
  )
}



