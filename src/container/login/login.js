import React from 'react'
import Logo from '../../component/logo/logo'
import { WingBlank, WhiteSpace, InputItem, Button, List } from 'antd-mobile'
import {Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import {login} from '../../redux/user.redux'

@connect(
    state => state.user,
    {login}
)

class Login extends React.Component{
    constructor(){
        super()
        this.state = {
            user: '',
            pwd: ''
        }
        this.register = this.register.bind(this)
        this.handleLogin = this.handleLogin.bind(this)
    }
    handleChange(key, val){
        this.setState({
            [key]: val
        })
    }
    handleLogin(){
        // console.log(this.state)
        this.props.login(this.state)
    }
    register(){
        this.props.history.push('/register')
    }
    render(){
        return (
            <div>
                {this.props.redirectTo ? <Redirect to={this.props.redirectTo}/> : null}
                <Logo/>
                <p className='error-msg'>{this.props.msg?this.props.msg:null}</p>
                <WingBlank>
                    <List>
                        <InputItem
                            onChange={v=>this.handleChange('user', v)}
                        >账号</InputItem>
                        <InputItem
                            type="password"
                            onChange={v=>this.handleChange('pwd', v)}
                        >密码</InputItem>
                    </List>
                    <WhiteSpace/>
                    <Button type='primary' onClick={this.handleLogin}>登录</Button>
                    <WhiteSpace/>
                    <Button type='primary' onClick={this.register}>注册</Button>
                </WingBlank>
            </div>
        )
    }
}

export default Login