import React from 'react'
import Logo from '../../component/logo/logo'
import { WingBlank, WhiteSpace, InputItem, Button, List } from 'antd-mobile'
import {Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import {login} from '../../redux/user.redux'
import imoocForm from '../../component/imooc-form/imooc-form'

// function hello(){
//     console.log('hello imooc, I love react!')
// }

// function wrapperHello(fn){
//     return function(){
//         console.log('before say hello')
//         fn()
//         console.log('after say hello')
//     }
// }

// hello = wrapperHello(hello)
// hello()

// class Hello extends React.Component{
//     render(){
//         return <h2>Hello imooc, I love react&redux!</h2>
//     }
// }

// 属性代理
// function wrapperHello(Comp){
//     class WrapComp extends React.Component{
//         componentDidMount(){
//             console.log('高阶组件新增的生命周期')
//         }
//         render(){
//             return <Comp></Comp>    
//         }
//     }

    // class WrapComp extends React.Component{
    //     render(){
    //         return (
    //             <div>
    //                 <p>这是高阶组件HOC特有属性</p>
    //                 <Comp name='text' {...this.props}/>
    //             </div>
    //         )
    //     }
    // }

//     return WrapComp
// }

// Hello = wrapperHello(Hello)
// @wrapperHello

@connect(
    state => state.user,
    {login}
)
@imoocForm

class Login extends React.Component{
    constructor(){
        super()
        this.register = this.register.bind(this)
        this.handleLogin = this.handleLogin.bind(this)
    }
    handleLogin(){
        // console.log(this.state)
        // console.log(this.props.state)
        this.props.login(this.props.state)
    }
    register(){
        this.props.history.push('/register')
    }
    render(){
        return (
            <div>
                {/* <Hello/> */}
                {this.props.redirectTo&&this.props.redirectTo!=='/login' ? <Redirect to={this.props.redirectTo}/> : null}
                <Logo/>
                <p className='error-msg'>{this.props.msg?this.props.msg:null}</p>
                <WingBlank>
                    <List>
                        <InputItem
                            onChange={v=>this.props.handleChange('user', v)}
                        >账号</InputItem>
                        <InputItem
                            type="password"
                            onChange={v=>this.props.handleChange('pwd', v)}
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