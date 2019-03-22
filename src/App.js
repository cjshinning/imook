import React from 'react'
import {connect} from 'react-redux'
import {addGun,removeGun,addGunAsync} from './index.redux'

@connect(
    // 你要state里面什么输入放入props
    state=>({num: state.counter}),
    // 你要什么方法放到props里，自动dispatch
    {addGun,removeGun,addGunAsync}
)

class App extends React.Component{
    render(){
        return (
            <div>
                <h2>现在有机枪{this.props.num}把</h2>
                <button onClick={this.props.addGun}>申请武器</button>
                <button onClick={this.props.removeGun}>上交武器</button>
                <button onClick={this.props.addGunAsync}>拖两天再给</button>
            </div>
        )
    }
}

export default App