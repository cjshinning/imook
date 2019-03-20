var express = require('express')
var app = express()
var mongoose = require('mongoose')

// 链接mongoDB
var DB_URL = 'mongodb://localhost:27017/imuk'
mongoose.connect(DB_URL)
mongoose.connection.on('connected', function(){
    console.log('mongo connect success')
})
// 类似mysql的表，mongo有文档和字段概念
const User = mongoose.model('user', new mongoose.Schema({
    user: {type: String, required: true},
    age: {type: Number, required: true}
}))
// 新增数据
// User.create({
//     user: 'xiaoming',
//     age: 18
// }, function(err, doc){
//     if(!err){
//         console.log(doc)
//     }else{
//         console.log(err)
//     }
// })
// 删除数据
// User.remove({age:18}, function(err,doc){
//     console.log(doc)
// })
// 更新数据
// User.update({user: 'xiaoming'},{'$set': {age: 20}},function(err, doc){
//     console.log(doc)
// })
app.get('/', function(req, res){
    res.send('Hello world!')
})

app.get('/data', function(req, res){
    User.findOne({user: 'xiaoming'},function(err, doc){
        res.json(doc)
    })
})

app.listen(9093, function(){
    console.log('Node app start at port 9093')
})