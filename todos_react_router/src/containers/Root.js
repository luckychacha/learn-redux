import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import { Router, Route, browserHistory } from 'react-router'

import App from './App'

import reducers from '../reducers'

const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

const Root = () => (
    <Provider store={store}>
        <Router history={ browserHistory }>
            <Route path="/(:filter)" component={App} />
        </Router>
    </Provider>
)

export default Root