var express = require('express')
var app = express()

app.get('/', function(req, res){
    res.send('Hello world!')
})

app.get('/data', function(req, res){
    res.json({name: 'Jenny', age: 28})
})

app.listen(9093, function(){
    console.log('app starts at 9093')
})