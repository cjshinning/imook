const express = require('express')
const Router = express.Router()
const models = require('./model')
const User = models.getModel('user')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const utils = require('utility')

Router.use(bodyParser())
Router.use(cookieParser())

Router.get('/list', function(req, res){
    // User.remove({}, function(err, doc){})
    User.find({}, function(err, doc){
        return res.json(doc)
    })
})

Router.post('/login', function(req, res){
    const {user, pwd} = req.body
    User.findOne({user, pwd: md5Pwd(pwd)}, function(err, doc){
        if(!doc){
            return res.json({code: 1, msg: '用户名或密码错误'})
        }
        console.log(doc)
        return res.json({code: 0, data: doc})
    })
})

Router.post('/register', function(req, res){
    // console.log(req.body)
    const {user, pwd, type} = req.body
    User.findOne({user}, function(err, doc){
        if(doc) {
            return res.json({code: 1, msg: '用户名重复'})
        }
        User.create({user, pwd: md5Pwd(pwd), type}, function(e,d){
            if(e){
                return res.json({code: 1, msg: '后端出错了'})
            }
            return res.json({code: 0})
        })
    })
})

Router.get('/info', function(req,res){
    res.json({code: 1})
})

function md5Pwd(pwd){
    const salt = 'imooc_is_good3823u#%*djsj~~'
    return utils.md5(utils.md5(salt+pwd))
}

module.exports = Router