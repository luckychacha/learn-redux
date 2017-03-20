import React from 'react'

import { connect } from 'react-redux'

import { setVisibilityFilter } from '../actions'
import FilterLink from '../components/FilterLink'

const mapStateToProps = (state) => ({
    currState: state.visibilityFilter
})

const mapDispatchToProps = {
    filterOnClick: setVisibilityFilter
}

const Footer = connect(
    mapStateToProps,
    mapDispatchToProps
)(FilterLink)

export default Footer