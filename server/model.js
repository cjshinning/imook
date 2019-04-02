const mongoose = require('mongoose');

// 链接mongo
const DB_URL = 'mongodb://localhost:27017/imook-chat'
mongoose.connect(DB_URL, { useNewUrlParser: true })
mongoose.connection.on('connected', function(){
    console.log('mongo connect success')
})

const models = {
    user: {
        'user': {type: String, required: true},
        'pwd': {type: String, required: true},
        'type': {'type': String, required: true},
        // 头像
        'avatar': {type: String},
        // 个人简介或者职位简介
        'desc': {type: String},
        // 职位名
        'title': {type: String},
        // boss还有其他两个字段
        'company': {type: String},
        'money': {type: String}
    },
    chat: {}
}

for(let m in models){
    mongoose.model(m, new mongoose.Schema(models[m]))
}

module.exports = {
    getModel: function(name){
        return mongoose.model(name)
    }
}