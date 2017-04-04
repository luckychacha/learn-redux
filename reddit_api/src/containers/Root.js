import React from 'react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import App from './App'

import configureStore from '../configureStore'

const store = configureStore()

const Root = () => (
    <Provider store={store}>
        <App />
    </Provider>
)

export default Root