import {
    // LOGIN_END,
    RETRIEVED_CREDENTIALS
    // LOGIN_START
} from '../reducers/login-reducer'
import fakeAuth from '../services/auth/fakeAuth'

export default function authenticate(user, pass) {
    // dispatch function reference is used to trigger the state change and re-render of components
    return async (dispatch, getState) => {
        let state = getState()
        console.log(`login-action:authenticate() - current State ${JSON.stringify(state)}`)
        try {
            const response = await fakeAuth.authenticate(user, pass)
            // console.log(`login-actions:authenticate() - ${JSON.stringify(response)}`)
            const result = loginSuccess(state, response)
            console.log(`loging-action:loginSuccess() - returned ${JSON.stringify(result)}`)
            return dispatch(result)
        } catch (error) {
            return Promise.reject(error)
        }
    }
}

function loginSuccess(state, response) {
    console.log(`loging-action:loginSuccess() - ${JSON.stringify(Object.assign({},state,{isAuthenticated:true}))}`)
    return {
        type: RETRIEVED_CREDENTIALS,
        credentials: response.data
    }
}