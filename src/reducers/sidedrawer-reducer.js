export const TOGGLE_SIDEDRAWER = 'TOGGLE_SIDEDRAWER'

const INIT_STATE = {
    isOpen: false
}

export default function sideDrawerReducer(state = INIT_STATE, action) {
    console.log(`sidedrawer-reducer ${JSON.stringify(action)} ${JSON.stringify(state)}`)
    switch (action.type) {
        case TOGGLE_SIDEDRAWER:
            const newOne = Object.assign({}, state, {
                isOpen: action.isOpen
            })
            console.log(`sidedrawer-reducer:toggleDrawer() - TOGGLE_SIDEDRAWER -> returning ${JSON.stringify(newOne)} `)
            return newOne
        default:
            console.log(`sidedrawer-reducer:toggleDrawer() - default -> returning ${JSON.stringify(action)}`)
            return state
    }
}