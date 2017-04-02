import React, { Component, PropTypes } from 'react'

import { selectSubreddit, fetchPostsIfNeeded, invalidateSubreddit } from '../actions'

import Picker from './Picker'
import Posts from './Posts'

class AsyncRoot extends Component {

    constructor(props) {
        super(props)
        this.handleChange = this.handleChange.bind(this)
        this.handleRefresh = this.handleRefresh.bind(this)
    }

    handleChange(nextSubreddit) {
        this.props.dispatch(selectSubreddit(nextSubreddit))
    }

    handleRefresh() {

    }

    render () {
        const { selectedSubreddit, posts, isFetching, lastUpdated } = this.props

        return (
            <div>
                <Picker value={selectedSubreddit}
                        onChange={this.handleChange}
                        options={['reactjs','frontend']}
                />
                {lastUpdated &&
                    <h2>last update time: {new Date(lastUpdated).toLocaleTimeString()}. {' '}</h2>
                }
                {!isFetching &&
                    <a href="#" onClick={this.handleRefresh}>refresh</a>
                }
                {isFetching && posts.length === 0 &&
                    <h2>loading...</h2>
                }
                {!isFetching && posts.length === 0 &&
                    <h2>this topic is empty</h2>
                }
                {posts.length > 0 &&
                    <Posts
                        {isFetching}
                        {posts}
                    />
                }
            </div>
        )
    }
}