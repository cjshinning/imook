import React from 'react'
import { NavBar } from 'antd-mobile'
import {connect} from 'react-redux'
import {Route} from 'react-router-dom'
import NavLinkBar from '../../component/navlink/navlink'
import Boss from '../../component/boss/boss'
import Genius from '../../component/gunius/genius'
import User from '../../component/user/user'
import Msg from '../../component/msg/msg'
import {getMsgList,recvMsg} from '../../redux/chat.redux'
import QueueAnim from 'rc-queue-anim'

@connect(
    state=>state,
    {getMsgList,recvMsg}
)

class Dashboard extends React.Component{
    componentDidMount(){
        if(!this.props.chat.chatmsg.length){
            this.props.getMsgList()
            this.props.recvMsg()
        }
    }
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
        const page = navList.find(v=>v.path==pathname)
        return (
            <div>
                <NavBar mode="dark" className='fixd-header'>{page.title}</NavBar>
                <div style={{marginTop:45}}>
                    <QueueAnim type='scaleX' duration={800}>
                        <Route key={page.path} path={page.path} component={page.component}/>
                    </QueueAnim>
                </div>
                <NavLinkBar data={navList}></NavLinkBar>
            </div>
        )
    }
}

export default Dashboard