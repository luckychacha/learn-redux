function posts(subState={
    isFetching:false,
    isInvalidate:false,
    items:[]
}, action) {
    switch (action.type) {
        case 'REQUEST_SUBREDDIT' :
            return Object.assign({}, subState, {
                isFetching:true,
                isInvalidate:false
            })
        case 'HANDLE_SUBREDDIT' :
            return Object.assign({}, subState, {
                isFetching:false,
                isInvalidate:false,
                items:action.items,
                receivedAt:action.receivedAt
            })
        default:
            return subState
    }
}

const allSubredditInfo = (state={}, action) => {
    switch (action.type) {
        case 'HANDLE_SUBREDDIT' :
        case 'REQUEST_SUBREDDIT' :
            return Object.assign({}, state, {
                [action.selectedSubreddit]: posts(state[action.selectedSubreddit], action)
            })
        default:
            return state
    }
}

export default allSubredditInfo