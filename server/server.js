const express = require('express')
const mongoose = require('mongoose')
const models = require('./model')
const Chat = models.getModel('chat')
const app = express()
const userRouter = require('./user')

const server = require('http').Server(app)
const io = require('socket.io')(server)

io.on('connection',function(socket){
    // console.log('user login')
    socket.on('sendmsg',function(data){
        // console.log(data)
        // io.emit('recvmsg', data)

        const {from,to,msg} = data
        const chatid = [from,to].sort().join('_')
        Chat.create({chatid,from,to,content:msg}, function(err,doc){
            io.emit('recvmsg',Object.assign({},doc._doc))
        })
    })
})
 
app.use('/user',userRouter)

server.listen(9093, function(){
    console.log('Node app start at 9093!')
})