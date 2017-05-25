import React, { Component } from 'react'

import { addTodo } from '../../actions/index'

import handleChange from '../../utils/handleChange'

class AddTodo extends Component {

    constructor(props) {
        super(props)
        this.state = {
            todoItem : ''
        }
        this.dispatch = this.props.dispatch
        //this.addTodoDispatch = this.props.addTodoDispatch
        this.addTodo = this.addTodo.bind(this)
        this.handleChange = handleChange.bind(this)

    }

    addTodo() {
        if(!this.state.todoItem.trim()) {
            return
        }
        this.props.addTodoDispatch(this.state.todoItem)
        this.init()
    }

    init() {
        this.setState({
            todoItem: ''
        })
    }

    render() {

        return (
            <div>
                <form onSubmit={
                    e => {
                        e.preventDefault()
                        this.addTodo()
                    }
                }>
                    <input
                        type="text"
                        name="todoItem"
                        value={this.state.todoItem}
                        onChange={this.handleChange} />
                    <button type="submit">添加一个todo</button>
                </form>
            </div>
        )
    }
}

export default AddTodo