const express = require('express')
const mongoose = require('mongoose')
const app = express()
const userRouter = require('./user')

const server = require('http').Server(app)
const io = require('socket.io')(server)

io.on('connection',function(socket){
    // console.log('user login')
    socket.on('sendmsg',function(data){
        console.log(data)
        io.emit('recvmsg', data)
    })
})
 
app.use('/user',userRouter)

server.listen(9093, function(){
    console.log('Node app start at 9093!')
})