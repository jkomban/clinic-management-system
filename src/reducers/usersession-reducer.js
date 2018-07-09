export const SET_USERSESSION = 'SET_USERSESSION'
export const RESET_USERSESSION = 'RESET_USERSESSION'


const INIT_STATE = {
    userId: '',
    token: '',
    isAuthenticated: false
}

export default function usersessionReducer(state = INIT_STATE, action) {
    console.log(`usersession-reducer:usersessionReducer() ${JSON.stringify(state)}- ${JSON.stringify(action)}`)
    switch (action.type) {
        case SET_USERSESSION:
            const newOneis = Object.assign({}, state, {
                isAuthenticated: action.isAuthenticated
            })

            console.log(`usersession-reducer: SET_USERSESSION ${JSON.stringify(newOneis)}`)
            return newOneis
        case RESET_USERSESSION:
            console.log(`usersession-reducer: RESET_USERSESSION ${JSON.stringify(state)}`)
            return INIT_STATE
        default:
            return INIT_STATE
    }
}