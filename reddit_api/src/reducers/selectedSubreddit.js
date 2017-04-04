const selectedSubreddit = (state='reactjs', action) => {
    switch(action.type) {
        case 'SELECT_SUBREDDIT':
            return action.selectedSubreddit
        default:
            return state
    }
}

export default selectedSubreddit