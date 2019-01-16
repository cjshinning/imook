import React from 'react'
import ReactDOM from 'react-dom'
import {createStore} from 'redux'
import {counter,addGun,removeGun} from './index.redux'
import App from './App'

let store=createStore(counter)

function render(){
    ReactDOM.render(<App store={store} addGun={addGun} removeGun={removeGun}/>, document.getElementById('root'))
}

render()

store.subscribe(render)