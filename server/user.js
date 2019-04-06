const express = require('express')
const Router = express.Router()
const models = require('./model')
const User = models.getModel('user')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const utils = require('utility')
const _filter =  {'pwd': 0, '__v': 0}
const ObjectId = require('mongodb').ObjectID;

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
    User.findOne({user, pwd: md5Pwd(pwd)}, _filter, function(err, doc){
        if(!doc){
            return res.json({code: 1, msg: '用户名或密码错误'})
        }
        res.cookie('userid', doc._id)
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
        const userModel = new User({user, type, pwd: md5Pwd(pwd)})
        userModel.save(function(e, d){
            if(e){
                return res.json({code: 1, msg: '后端出错了'})
            }
            const {user, type, _id} = d
            res.cookie('userid', _id)
            return res.json({code: 0, data: {user, type, _id}})
        })
        // User.create({user, pwd: md5Pwd(pwd), type}, function(e,d){
        //     if(e){
        //         return res.json({code: 1, msg: '后端出错了'})
        //     }
        //     return res.json({code: 0})
        // })
    })
})

Router.get('/info', function(req,res){
    const {userid} = req.cookies
    // console.log(userid)
    if(!userid){
        return res.json({code: 1});
    }
    // console.log(_id)
    User.findOne({"_id": ObjectId(userid)}, _filter, function(err, doc){
        if(err){
            return res.json({code: 1, msg: '后端出错了'})
        }
        if(doc){
            return res.json({code: 0, data: doc})
        }
    })
})

function md5Pwd(pwd){
    const salt = 'imooc_is_good3823u#%*djsj~~'
    return utils.md5(utils.md5(salt+pwd))
}

module.exports = Router