let currTodo = 0

export const addTodo = (text) => ({
    type: "ADD_TODO",
    text: text,
    id: currTodo++
})