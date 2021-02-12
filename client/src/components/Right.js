import React from 'react'
import Chatroom from './Chatroom'
import {BrowserRouter as Route,Switch} from 'react-router-dom';
import '../styles/Right.css'


export default function Right() {

    
    return (
        <div className = 'right'>
          <Switch>
            <Route path = '/users/:user'>
              <Chatroom></Chatroom>
            </Route> 
            <Route path = '/rooms/:room'>
              <Chatroom></Chatroom>
            </Route> 
          </Switch>
        </div>
    )
}
