import React from 'react'

class App extends React.Component{
    constructor(){
        super()
    }
    render(){
        const num = this.props.store.getState()
        const addGun = this.props.addGun
        const removeGun = this.props.removeGun
        return (
            <div>
                <h2>现在有机枪{num}把</h2>
                <button onClick={()=>{this.props.store.dispatch(addGun())}}>申请武器</button>
                <button onClick={()=>{this.props.store.dispatch(removeGun())}}>上交武器</button>
            </div>
        )
    }
}

export default App