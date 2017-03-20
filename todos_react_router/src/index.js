import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import { render } from 'react-dom'

import Root from './containers/Root'

import reducers from './reducers'


render(
    <Root />,
    document.getElementById('root')
)
