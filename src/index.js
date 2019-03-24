import React from 'react'
import ReactDOM from 'react-dom'
import {createStore,applyMiddleware,compose} from 'redux'
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'
import reducers from './reducer'
import './config'

import Login from './container/login/login'
import Register from './container/register/register'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(
    applyMiddleware(thunk)
));

// 登录
//     没有登录信息，统一跳转login
// 页面    导航+显示+注销
//     一营
//     二营
//     骑兵连

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <div>
                <Route path='/login' component={Login}></Route>
                <Route path='/register' component={Register}></Route>
            </div>
        </BrowserRouter>
    </Provider>, 
    document.getElementById('root')
)

