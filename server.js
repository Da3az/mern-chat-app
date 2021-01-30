var app = require('express')();
const express = require('express');
var http = require('http').createServer(app);
const PORT = process.env.PORT || 5000
var cors = require('cors')

const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
app.use(cookieParser());
app.use(express.json());

var corsOptions = {
  origin: 'http://localhost:3000/',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

app.use(cors(corsOptions))

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000/"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

mongoose.connect('mongodb+srv://salah:chaki999@cluster0.vdj1l.mongodb.net/mern-chat?retryWrites=true&w=majority',{useNewUrlParser : true,useUnifiedTopology: true},()=>{
    console.log('successfully connected to database');
});
mongoose.set('useFindAndModify', false);
var io = require('socket.io')(http);

const userRouter = require('./routes/userRouter');
const chatRouter = require('./routes/chatRouter');
const ioRouter = require('./routes/ioRouter')(io);


app.use('/user',userRouter);
app.use('/chat',chatRouter);
app.use('/', ioRouter);



http.listen(PORT,()=>{
  console.log(`Listening on port ${PORT}`);
})