import React from 'react'
import {connect} from 'react-redux'
import { Result, WhiteSpace, List, Modal } from 'antd-mobile'
import {Redirect} from 'react-router-dom'
import browserCookies from 'browser-cookies'
import {logoutSubmit} from '../../redux/user.redux'

@connect(
    state=>state.user,
    {logoutSubmit}
)

class User extends React.Component{
    constructor(){
        super()
        this.logout = this.logout.bind(this)
    }
    logout(){
        const alert = Modal.alert
        alert('注销', '确定退出登录?', [
            { text: '取消', onPress: () => console.log('cancel') },
            { text: '确定', onPress: () => {
                browserCookies.erase('userid')
                // window.location.href = window.location.href
                this.props.logoutSubmit()
            } },
        ])
    }
    render(){
        const props = this.props
        const Item = List.Item
        const Brief = Item.Brief
        return props.user?(
            <div>
                <Result
                    img={<img src={require(`../img/${props.avatar}.png`)} style={{width:60}} alt="" />}
                    title={props.avatar}
                    message={props.type=='boss'?props.company:null}
                />
                <List renderHeader={()=>'简介'}>
                    <Item
                        multipleLine
                    >
                        {props.title}
                        {props.desc.split('\n').map(v=><Brief key={v}>{v}</Brief>)}
                        {props.money?<Brief>薪资：{props.money}</Brief>:null}
                    </Item>
                </List>
                <WhiteSpace/>
                <List>
                    <Item onClick={this.logout}>退出登录</Item>
                </List>
            </div>
        ):<Redirect to={this.props.redirectTo}/>
    }
}

export default User