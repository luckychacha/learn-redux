import { combineReducers } from 'redux'

import selectedSubreddit from './selectedSubreddit'
import allSubredditInfo from './allSubredditInfo'

const rootReducer = combineReducers({
    selectedSubreddit,
    allSubredditInfo
})

export default rootReducer