import {initialState} from './states'


export let reducer = (state = initialState,action) => {
  switch (action.type){

    case 'SET_USER':
      return {
        ...state,
        user:action.payload
      }
    case 'SET_ALERT':
      return {
        ...state,
        alert:action.payload
      }
    case 'SET_TARGET':
      return {
        ...state,
         target:action.payload
      }
    case 'SET_USERS':
     return {
       ...state,
       users:action.payload
     }
    case 'SET_ROOMS':
      return {
        ...state,
        rooms:action.payload
      } 
      case 'SET_ROOM_NAME':
        return{
          ...state,
          roomName:action.payload
        }
      case 'SET_MESSAGES':
        return{
          ...state,
          messages:action.payload
        }    
      case 'SET_CHAT':
        return{
          ...state,
          chat:action.payload
        }  
    default:
      return state

  }
}
