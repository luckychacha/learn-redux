import { combineReducers } from 'redux'

import todos from './todos'
import visibilityFilter from './visibilityFilter'
import { routerReducer as routing } from 'react-router-redux'

const reducers = combineReducers({
    todos,
    visibilityFilter,
    routing
})

export default reducers