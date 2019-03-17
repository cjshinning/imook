import {combineReducers} from 'redux'
import {auth} from './Auth.redux'
import {counter} from './index.redux'

export default combineReducers({auth,counter})