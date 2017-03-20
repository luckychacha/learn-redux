
import React from 'react'
import { connect } from 'react-redux'

import TodoList from '../components/TodoList'
import { toggleTodo } from '../actions'

const filterTodoList = (todos, visibilityFilter) => {
    switch (visibilityFilter) {
        case 'SHOW_ALL':
            return todos
        case 'SHOW_ACTIVE':
            return todos.filter(todo => !todo.completed)
        case 'SHOW_COMPLETED':
            return todos.filter(todo => todo.completed)
    }
}


const mapStateToProps = (state) => ({
    todos: filterTodoList(state.todos, state.visibilityFilter)
})

const mapDispatchToProps = {
    addTodoClick: toggleTodo
}

const VisibleTodoList = connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList)

export default VisibleTodoList