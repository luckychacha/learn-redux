import React from 'react'
import { connect } from 'react-redux'

import AsyncRoot from '../components/AsyncRoot'

mapStateToProp = (state) => ({

})

const AsyncApp = connect(
    mapStateToProp
)(AsyncRoot)

export default AsyncApp