var app = require('express')();
const express = require('express');
var http = require('http').createServer(app);
const PORT = process.env.PORT || 5000
var cors = require('cors')
const mongoose = require('mongoose');
const path = require('path')


app.use(express.json());

var corsOptions = {
  origin: 'http://localhost:3000/',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

app.use(cors(corsOptions))


require('dotenv').config();

const uri = process.env.ATLAS_URI

mongoose.connect(uri,{useNewUrlParser : true,useUnifiedTopology: true},()=>{
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

app.use(express.static('public'))
app.get('*',(req,res)=>{
  res.sendFile(path.resolve(__dirname,'public','index.html'))
})


http.listen(PORT,()=>{
  console.log(`Listening on port ${PORT}`);
})