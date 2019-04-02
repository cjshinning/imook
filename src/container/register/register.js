import React from 'react'
import Logo from '../../component/logo/logo'
import { WingBlank, WhiteSpace, Radio, InputItem, Button, List } from 'antd-mobile'
import {Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import {register} from '../../redux/user.redux'

@connect(
    state=>state.user,
    {register}
)

class Register extends React.Component{
    constructor(){
        super()
        this.state = {
            user: '',
            pwd: '',
            repeatpwd: '',
            type: 'genius'
        }
        this.handleRegister = this.handleRegister.bind(this)
    }
    handleChange(key, val){
        this.setState({
            [key]: val
        })
    }
    handleRegister(){
        // console.log(this.state)
        this.props.register(this.state)
    }
    render(){
        const RadioItem = Radio.RadioItem;
        return (
            <div>
                {this.props.redirectTo ? <Redirect to={this.props.redirectTo}/> : null}
                <Logo/>
                <p className='error-msg'>{this.props.msg?this.props.msg:null}</p>
                <WingBlank>
                    <List>
                        <InputItem
                            onChange={v=>this.handleChange('user',v)}
                        >账号</InputItem>
                        <InputItem
                            type='password'
                            onChange={v=>this.handleChange('pwd',v)}
                        >密码</InputItem>
                        <InputItem
                            type='password'
                            onChange={v=>this.handleChange('repeatpwd',v)}
                        >确认密码</InputItem>
                        <RadioItem 
                            checked={this.state.type=='genius'}
                            onChange={()=>this.handleChange('type','genius')}
                        >牛人</RadioItem>
                        <RadioItem 
                            checked={this.state.type=='boss'}
                            onChange={()=>this.handleChange('type','boss')}
                        >BOSS</RadioItem>
                    </List>
                    <WhiteSpace/>
                    <Button type='primary' onClick={this.handleRegister}>注册</Button>
                </WingBlank>
            </div>
        )
    }
}

export default Register