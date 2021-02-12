const io = require('socket.io-client');
const socket = io('http://localhost:5000/', {
  withCredentials: true,
  extraHeaders: {
    "my-custom-header": "abcd"
  }
});

export let initialState=
  {
    socket,
    user:{
     state: false,
     email:'',
     id:'',
     username:''
    },

    alert:{
      type:'',
      message:''
    },

    users:[],
    
    guests:[],

    rooms:[],

    target:{
      type:'',
      id:'',
      username:'',
      roomname:''
    },
    roomName:'',
    messages:[],
    chat:[]
}