import React from 'react'
import { connect } from 'react-redux'
import Head from './Head'
import AddTodo from '../component/Todo/AddTodo'

import { addTodo } from '../actions'

const mapDispatchToProps = {
    addTodoDispatch: addTodo
}

const mapStateToProps = (state) => ({
    state
})

const Todo = connect(
    mapStateToProps,
    mapDispatchToProps
)(AddTodo)

export default Todo