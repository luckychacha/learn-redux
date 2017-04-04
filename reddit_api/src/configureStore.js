import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import rootReducers from './reducers'

export default function configureStore() {
    const composeEnhancers =
        typeof window === 'object' &&
            window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
                window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose
    const enhancer = composeEnhancers(applyMiddleware(
        thunk
    ))
    return createStore(rootReducers, enhancer)
}