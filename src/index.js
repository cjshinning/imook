import React from 'react'
import ReactDOM from 'react-dom'
import {createStore,applyMiddleware,compose} from 'redux'
import {counter,addGun,removeGun,addGunAsync} from './index.redux'
import thunk from 'redux-thunk'
import App from './App'

let store=createStore(counter,compose(
    applyMiddleware(thunk),
    window.devToolsExtension?window.devToolsExtension():f=>f
));

function render(){
    ReactDOM.render(<App store={store} addGun={addGun} removeGun={removeGun} addGunAsync={addGunAsync}/>, document.getElementById('root'))
}

render()

store.subscribe(render)