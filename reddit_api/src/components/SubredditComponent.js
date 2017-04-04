import React,{ Component } from 'react'

import SelectSubreddit from './SelectSubreddit'

import { selectSubreddit,fetchIfNeeded } from '../actions'

class SubredditComponent extends Component {

    constructor(props) {
        super(props)
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(subreddit) {
        this.props.dispatch(selectSubreddit(subreddit))
    }

    componentDidMount() {
        this.props.dispatch(fetchIfNeeded(this.props.selectedSubreddit))
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.selectedSubreddit !== this.props.selectedSubreddit) {
            this.props.dispatch(fetchIfNeeded(nextProps.selectedSubreddit))
        }
    }

    render() {
        const { selectedSubreddit } = this.props
        return (
            <div>
                <SelectSubreddit
                    selectedSubreddit = {selectedSubreddit}
                    options = {['reactjs', 'frontend']}
                    onChange = {this.handleChange}
                />
            </div>
        )
    }
}

export default SubredditComponent