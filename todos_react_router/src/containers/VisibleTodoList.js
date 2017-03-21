
import React from 'react'
import { connect } from 'react-redux'

import TodoList from '../components/TodoList'
import { toggleTodo } from '../actions'

const filterTodoList = (todos, visibilityFilter) => {
    switch (visibilityFilter) {
        case 'all':
            return todos
        case 'active':
            return todos.filter(todo => !todo.completed)
        case 'completed':
            return todos.filter(todo => todo.completed)
    }
}


const mapStateToProps = (state, ownProps) => ({
    todos: filterTodoList(state.todos, ownProps.filter)
})

const mapDispatchToProps = {
    addTodoClick: toggleTodo
}

const VisibleTodoList = connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList)

export default VisibleTodoList