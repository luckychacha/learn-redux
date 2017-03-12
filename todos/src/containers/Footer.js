import React from 'react'

import { connect } from 'react-redux'

import FilterLink from '../components/FilterLink'
import { setVisibilityFilter } from '../actions'

const mapStateToProps = (state, ownProp) => ({
    currState: state.visibilityFilter
})

const mapDispatchToProps = {
    onFilterClick: setVisibilityFilter
}

const Footer = connect(
    mapStateToProps,
    mapDispatchToProps
)(FilterLink)

export default Footer