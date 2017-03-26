import React, { Component, PropTypes } from 'react'

import { selectSubreddit, fetchPostsIfNeeded, invalidateSubreddit } from '../actions'

class AsyncRoot extends Component {

    constructor(props) {
        super(props)
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(nextSubreddit) {
        this.props.dispatch(selectSubreddit(nextSubreddit))
    }

    render () {
        const { selectedSubreddit, posts, isFetching, lastUpdated } = this.props

        return (
            <div>
                <Picker value={selectedSubreddit}
                        onChange={this.handleChange}
                        options={['reactjs','frontend']}
                />
            </div>
        )
    }
}