import {
    SET_USERSESSION,
    RESET_USERSESSION
} from '../reducers/usersession-reducer'


export function setUserSession(userSession) {
    console.log(`usersession-action:setUserSession() -${JSON.stringify(userSession)}`)
    return async (dispatch) => {
        return dispatch({
            type: SET_USERSESSION,
            isAuthenticated: userSession.credentials.isAuthenticated
        })
    }
}
export function resetUserSession() {
    console.log(`usersession-action:resetUserSession() - RESET_USERSESSION`)
    return async (dispatch) => {
        return dispatch({
            type: RESET_USERSESSION,
            isAuthenticated: false
        })
    }
}