import React from 'react'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { connect } from 'react-redux'

import Head from './Head'
import Home from './Home'
import Todo from './Todo'
import RedditApi from './RedditApi'

const App = () => (
    <Router history={browserHistory}>
        <Route path="/" component={Head}>
            <IndexRoute component={Home}/>
            <Route path="/Todo" component={Todo}/>
            <Route path="/RedditApi" component={RedditApi}/>
        </Route>
    </Router>
)

export default App