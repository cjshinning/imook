import React from 'react'
import ReactDOM from 'react-dom'
import {createStore,applyMiddleware,compose} from 'redux'
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'
import reducers from './reducer'
import Auth from './Auth'
import Dashboard from './Dashboard'

let store=createStore(reducers,compose(
    applyMiddleware(thunk),
    window.devToolsExtension?window.devToolsExtension():f=>f
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
                <Switch>
                    <Route path='/login' component={Auth}></Route>
                    <Route path='/dashboard' component={Dashboard}></Route>
                </Switch>
            </div>
        </BrowserRouter>
    </Provider>, 
    document.getElementById('root')
)


