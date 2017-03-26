import { createStore,applyMiddleware } from 'redux'
import { connect } from 'react-redux'
import thunk from 'redux-thunk'

import reducers from './reducers'

const createStoreWithMiddle = applyMiddleware(
    thunk
)(createStore)

export default function configureStore() {

    const composeEnhancer =
        typeof window === 'object' &&
            window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
                window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({

                }) : compose;

    const enhancer = composeEnhancer(
        applyMiddleware(
            thunk
        )
    )
    return createStore(reducers, enhancer)
}
