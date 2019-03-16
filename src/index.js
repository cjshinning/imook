import React from 'react'
import ReactDOM from 'react-dom'
import {createStore,applyMiddleware,compose} from 'redux'
import {BrowserRouter,Route,Link,Redirect,Switch} from 'react-router-dom'
import {counter,addGun,removeGun,addGunAsync} from './index.redux'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'
import App from './App'

let store=createStore(counter,compose(
    applyMiddleware(thunk),
    window.devToolsExtension?window.devToolsExtension():f=>f
));

function Erying(){
    return <h2>二营</h2>
}

function Qibilian(){
    return <h2>骑兵连</h2>
}

class Test extends React.Component{
    render(){
        console.log(this.props)
        return <h2>测试组件{this.props.match.params.location}</h2>
    }
}

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <div>
                <ul>
                    <li><Link to='/'>一营</Link></li>
                    <li><Link to='/erying'>二营</Link></li>
                    <li><Link to='/qibilian'>骑兵连</Link></li>
                </ul>
                <Switch>
                    <Route path='/' exact component={App}></Route>
                    <Route path='/erying' component={Erying}></Route>
                    <Route path='/qibilian' component={Qibilian}></Route>
                    <Route path='/:location' component={Test}></Route>
                </Switch>
            </div>
        </BrowserRouter>
    </Provider>, 
    document.getElementById('root')
)


