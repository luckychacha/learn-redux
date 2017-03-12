const todo = (subState, action) => {
    switch (action.type) {
        case 'ADD_TODO' :
            return {
                id: action.id,
                text: action.text,
                completed: false
            }
        case 'TOGGLE_TODO' :
            if(subState.id !== action.id) {
                return subState
            }

            return {
                ...subState,
                completed: !subState.completed
            }
        default :
            return subState
    }
}

const Todos = (state=[], action) => {
    switch (action.type) {
        case 'ADD_TODO' :
            return [
                ...state,
                todo(undefined, action)
            ]
        case 'TOGGLE_TODO' :
            return state.map(s =>
                todo(s, action)
            )
        default :
            return state
    }
}

export default Todos