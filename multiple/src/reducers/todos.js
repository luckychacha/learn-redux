const todo = (subState, action) => {
    switch (action.type) {
        case 'ADD_TODO' :
            return {
                text: action.text,
                id: action.id,
                completed: false
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
        default:
            return state
    }
}

export default todos