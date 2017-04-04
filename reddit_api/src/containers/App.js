import React from 'react'
import { connect } from 'react-redux'

import SubredditComponent from '../components/SubredditComponent'

const mapStateToProps = (state) => ({
    selectedSubreddit: state.selectedSubreddit
})

const App = connect(
    mapStateToProps
)(SubredditComponent)

export default App

