const express = require('express')
const mongoose = require('mongoose')
const userRouter = require('./user')

// 新建app
const app = express()

app.use('/user',userRouter)

app.listen(9093, function(){
    console.log('Node app start at 9093!')
})