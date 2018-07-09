// export const LOGIN_START = 'LOGIN_START'
// export const LOGIN_END = 'LOGIN_START'
export const RETRIEVED_CREDENTIALS = 'RETRIEVED_CREDENTIALS'

const INIT_STATE = {
    credentials: {},
    inProgress: false
}

export default function loginReducer(state = INIT_STATE, action) {
    // console.log(`login-reducer:loginReducer()-currentState is  ${JSON.stringify(state)}`)
    // console.log(`login-reducer:loginReducer()-currentAction ${JSON.stringify(action)}`)
    switch (action.type) {
        // case LOGIN_START:
        //     console.log(`Inside loginReducer LOGIN_START`)
        //     return Object.assign({}, state, {
        //         inProgress: true
        //     })
        case RETRIEVED_CREDENTIALS:
            console.log(`login-reducer:loginReducer()-RETRIEVED_CREDENTIALS ${JSON.stringify(state)} ${JSON.stringify(action)}`)
            const returnObject = Object.assign({}, state, {
                credentials: action.credentials,
                inProgress: false
            })
            console.log(`login-reducer:loginReducer()-RETRIEVED_CREDENTIALS ${JSON.stringify(returnObject)}`)
            return returnObject
            // case LOGIN_END:
            //     console.log(`Inside loginReducer LOGIN_END`)
            //     return Object.assign({}, state, {
            //         inProgress: false
            //     })
        default:
            console.log(`login-reducer:loginReducer()-DEFAULT  ${JSON.stringify(state)} ${JSON.stringify(action)}`)
            return INIT_STATE
    }
}