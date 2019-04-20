import React from 'react'
import { NavBar } from 'antd-mobile'
import {connect} from 'react-redux'
import {Switch,Route} from 'react-router-dom'
import NavLinkBar from '../../component/navlink/navlink'
import Boss from '../../component/boss/boss'
import Genius from '../../component/gunius/genius'
import User from '../../component/user/user'

function Msg(){
    return <h2>消息列表页</h2>
}

@connect(
    state=>state
)

class Dashboard extends React.Component{
    render(){
        const pathname = this.props.location.pathname
        const user = this.props.user
        const navList = [
            {
                path: '/boss',
                text: '牛人',
                icon: 'boss',
                title: '牛人列表',
                component: Boss,
                hide: user.type == 'genius'
            },
            {
                path: '/genius',
                text: 'BOSS',
                icon: 'job',
                title: 'Boss列表',
                component: Genius,
                hide: user.type == 'boss'
            },
            {
                path: '/msg',
                text: '消息',
                icon: 'msg',
                title: '消息列表',
                component: Msg
            },
            {
                path: '/me',
                text: '我',
                icon: 'user',
                title: '个人中心',
                component: User
            },
        ]
        return (
            <div>
                <NavBar mode="dark" className='fixd-header'>{navList.find(v=>v.path==pathname).title}</NavBar>
                <div>
                    <Switch>
                        {navList.map(v=>(
                            <Route key={v.path} path={v.path} component={v.component}/>
                        ))}
                    </Switch>
                </div>
                <NavLinkBar data={navList}></NavLinkBar>
            </div>
        )
    }
}

export default Dashboard