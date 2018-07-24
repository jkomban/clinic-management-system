import loginReducer from './login-reducer'
import usersessionReducer from './usersession-reducer'
import sidedrawerReducer from './sidedrawer-reducer'
import {
    combineReducers
} from 'redux'

const rootReducer = combineReducers({
    loginState: loginReducer,
    userSession: usersessionReducer,
    drawerState: sidedrawerReducer
})

export default rootReducer