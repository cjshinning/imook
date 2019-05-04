
import express from 'express'
// const express = require('express')
import mongoose from 'mongoose'
import models from './model'
import path from 'path'
import csshook from 'css-modules-require-hook/preset'
import assethook from 'asset-require-hook'
assethook({
    extensions: ['png']
})
import React from 'react'
import ReactDOMServer from 'react-dom/server'
import {renderToString} from 'react'

import {createStore,applyMiddleware,compose} from 'redux'
import {StaticRouter } from 'react-router-dom'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'
import App from '../src/app'
import reducers from '../src/reducer'
import staticPath from '../build/asset-manifest.json'

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

// 1.购买域名
// 2.DNS域名解析到你的服务器
// 3.安装ngix
// 4.使用pm2管理node进程
app.use(function(req,res,next){
    if(req.url.startsWith('/user/') || req.url.startsWith('/static/')){
        return next()
    }
    // const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
    const store = createStore(reducers, compose(
        applyMiddleware(thunk)
    ))
    let context = {}
    const markup = ReactDOMServer.renderToString(
        (<Provider store={store}>
            <StaticRouter location={req.url} context={context}>
                <App />
            </StaticRouter>
        </Provider>)
    )

    const pageHtml = `
    <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="utf-8" />
            <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
            />
            <meta name="theme-color" content="#000000" />
            <title>React App</title>
            <meta name="description" content="react,redux,imooc,聊天,ssr" />
            <link rel="stylesheet" href="${staticPath['static/css/1.841955f0.chunk.css']}">
            <link rel="stylesheet" href="${staticPath['main.css']}">
        </head>
        <body>
            <noscript>You need to enable JavaScript to run this app.</noscript>
            <div id="root">${markup}</div>
            <script src="${staticPath['runtime~main.js']}"></script>  
            <script src="${staticPath['static/js/1.a8df11d0.chunk.js']}"></script>  
            <script src="${staticPath['main.js']}"></script>  
        </body>
    </html>
    `
    // const htmlRes = ReactDOMServer.renderToString(<App></App>)
    res.send(pageHtml)
    // console.log('path resolve:'+path.resolve('build/index.html'))
    // return res.sendFile(path.resolve('build/index.html'))
})
app.use('/',express.static(path.resolve('build')))

server.listen(9093, function(){
    console.log('Node app start at 9093!')
})