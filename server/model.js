// 链接mongo
const DB_URL = 'mongodb://localhost:27017/my-imooc'
mongoose.connect(DB_URL, { useNewUrlParser: true })
mongoose.connection.on('connected', function(){
    console.log('mongo connect success')
})