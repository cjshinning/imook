
import express from 'express'
// const express = require('express')
import mongoose from 'mongoose'
import models from './model'
import path from 'path'
import React from 'react'
const Chat = models.getModel('chat')
const app = express()
const userRouter = require('./user')

const server = require('http').Server(app)
const io = require('socket.io')(server)

class App extends React.Component{
    render(){
        return <h2>server render</h2>
    }
}
console.log(App)
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

// 1.购买域名
// 2.DNS域名解析到你的服务器
// 3.安装ngix
// 4.使用pm2管理node进程
app.use(function(req,res,next){
    if(req.url.startsWith('/user/') || req.url.startsWith('/static/')){
        return next()
    }
    // console.log('path resolve:'+path.resolve('build/index.html'))
    return res.sendFile(path.resolve('build/index.html'))
})
app.use('/',express.static(path.resolve('build')))

server.listen(9093, function(){
    console.log('Node app start at 9093!')
})