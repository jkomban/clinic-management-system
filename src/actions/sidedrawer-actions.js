import {
    TOGGLE_SIDEDRAWER
} from '../reducers/sidedrawer-reducer'

export default function toggleSideDrawer(changeTo) {
    return async (dispatch) => {
        console.log(`sidedrawer-actions-toggleSideDrawer() -${changeTo}`)
        return dispatch({
            type: TOGGLE_SIDEDRAWER,
            isOpen: changeTo
        })
    }
}