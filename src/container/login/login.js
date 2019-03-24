import React from 'react'
import Logo from '../../component/logo/logo'
import { WingBlank, WhiteSpace, InputItem, Button, List } from 'antd-mobile'

class Login extends React.Component{
    constructor(){
        super()
        this.register = this.register.bind(this)
    }
    register(){
        this.props.history.push('/register')
    }
    render(){
        return (
            <div>
                <Logo/>
                <h2>登录页</h2>
                <WingBlank>
                    <List>
                        <InputItem>账号</InputItem>
                        <InputItem>密码</InputItem>
                    </List>
                    <WhiteSpace/>
                    <Button type='primary'>登录</Button>
                    <WhiteSpace/>
                    <Button type='primary' onClick={this.register}>注册</Button>
                </WingBlank>
            </div>
        )
    }
}

export default Login