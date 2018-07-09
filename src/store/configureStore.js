import {
    createStore,
    applyMiddleware,
    compose
} from 'redux'
import reducer from '../reducers'
import reduxThunk from 'redux-thunk'
import immutableStateInvariant from 'redux-immutable-state-invariant'

export function configureStore(initialState) {
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
    return createStore(
        reducer,
        initialState,
        composeEnhancers(applyMiddleware(immutableStateInvariant(), reduxThunk))
    )
}

const store = configureStore()
export default store
