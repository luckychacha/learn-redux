const todo = (subState, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return {
                text: action.text,
                id: action.id,
                completed: false
            }
        case 'TOGGLE_TODO':
            if (subState.id !== action.id) {
                return subState
            }
            return {
                ...subState,
                completed: !subState.completed
            }
    }
}

const todos = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [
                ...state,
                todo(undefined, action)
            ]
        case 'TOGGLE_TODO':
            return state.map(subState=>
                todo(subState, action)
            )
        default:
            return state
    }
}

export default todos