import React from 'react'
import Logo from '../../component/logo/logo'
import { WingBlank, WhiteSpace, Radio, InputItem, Button, List } from 'antd-mobile'

class Register extends React.Component{
    constructor(){
        super()
        this.state = {
            type: 'genius'
        }
    }
    render(){
        const RadioItem = Radio.RadioItem;
        return (
            <div>
                <Logo/>
                <h2>注册页</h2>
                <WingBlank>
                    <List>
                        <InputItem>账号</InputItem>
                        <InputItem>密码</InputItem>
                        <InputItem>确认密码</InputItem>
                        <RadioItem checked={this.state.type=='genius'}>牛人</RadioItem>
                        <RadioItem checked={this.state.type=='boss'}>BOSS</RadioItem>
                    </List>
                    <WhiteSpace/>
                    <Button type='primary' onClick={this.register}>注册</Button>
                </WingBlank>
            </div>
        )
    }
}

export default Register