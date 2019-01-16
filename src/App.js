import React from 'react'
import {addGun} from './index.redux'

class App extends React.Component{
    constructor(){
        super()
    }
    render(){
        const num = this.props.store.getState()
        return (
            <div>
                <h2>现在有机枪{num}把</h2>
                <button onClick={()=>{this.props.store.dispatch(addGun())}}>申请武器</button>
            </div>
        )
    }
}

export default App