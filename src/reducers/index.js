import loginReducer from './login-reducer'
import usersessionReducer from './usersession-reducer'
import {
    combineReducers
} from 'redux'

const rootReducer = combineReducers({
    loginState: loginReducer,
    userSession: usersessionReducer
})

export default rootReducer