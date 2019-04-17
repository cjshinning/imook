import {combineReducers} from 'redux'
import {user} from './redux/user.redux'
import {chartuser} from './redux/chatuser.redux'

export default combineReducers({user,chartuser})