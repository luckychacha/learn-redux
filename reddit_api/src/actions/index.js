import fetch from 'isomorphic-fetch'

export const selectSubreddit = (selectedSubreddit) => ({
    type: "SELECT_SUBREDDIT",
    selectedSubreddit
})

const requestSubreddit = (selectedSubreddit) => ({
    type: "REQUEST_SUBREDDIT",
    selectedSubreddit
})

const handleSubreddit = (selectedSubreddit, selectedSubredditResponse) => {
    return {
        type: "HANDLE_SUBREDDIT",
        selectedSubreddit,
        items: selectedSubredditResponse.data.children.map(v=>v.data),
        receivedAt: Date.now()
    }
}

function fetchSubreddit(selectedSubreddit) {
    return dispatch => {
        dispatch(requestSubreddit(selectedSubreddit))
        fetch(`http://www.reddit.com/r/${selectedSubreddit}.json`)
            .then(respoonse=>respoonse.json())
            .then(json=>dispatch(handleSubreddit(selectedSubreddit, json)))

    }
}

function shouldFetch(state, selectedSubreddit) {
    const selectedSubredditInfo = state.allSubredditInfo[selectedSubreddit]
    if (!selectedSubredditInfo) {
        return true
    } else if (selectedSubredditInfo.isFetching) {
        return false
    } else {
        return selectedSubredditInfo.isInvalidate
    }
}

export function fetchIfNeeded(selectedSubreddit) {
    return (dispatch, getState) => {
        if(shouldFetch(getState(), selectedSubreddit)) {
            return dispatch(fetchSubreddit(selectedSubreddit))
        }
    }
}