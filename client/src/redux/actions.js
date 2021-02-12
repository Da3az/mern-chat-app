const SET_USER = 'SET_USER'
const SET_ALERT = 'SET_ALERT'
const SET_TARGET = 'SET_TARGET'
const SET_ROOMS = 'SET_ROOMS'
const SET_USERS = 'SET_USERS'
const SET_ROOM_NAME = 'SET_ROOM_NAME'
const SET_MESSAGES = 'SET_MESSAGES'
const SET_CHAT = 'SET_CHAT'

export function setUser(name){
  return{
    type:SET_USER,
    payload:name
  }
}

export function setRoomName(name){
  return{
    type:SET_ROOM_NAME,
    payload:name
  }
}
export function setMessages(messages){
  return{
    type:SET_MESSAGES,
    payload:messages
  }
}

export function setAlert(message){
  return{
    type:SET_ALERT,
    payload:message
  }
}

export function setTarget(target){
  return{
    type:SET_TARGET,
    payload:target
  }
}


export function setUsers(users){
  return{
    type:SET_USERS,
    payload:users
  }
}

export function setRooms(rooms){
  return{
    type:SET_ROOMS,
    payload:rooms
  }
}

export function setChat(chat){
  return{
    type:SET_CHAT,
    payload:chat
  }
}






