import React from 'react'
import { Provider } from 'react-redux'
import { render } from 'react-dom'
import { createStore } from 'redux'

import App from './components/App'

import Reducers from './reducers'

const store = createStore(Reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

render (
    <Provider store = {store}>
        <App/>
    </Provider>,
    document.getElementById('root')
)