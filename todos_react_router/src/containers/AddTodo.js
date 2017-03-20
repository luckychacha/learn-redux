import React from 'react'

import { connect } from 'react-redux'

import { addTodo } from '../actions'

let AddTodo = ({ dispatch }) => {
    let input

    return (
        <div>
            <form action="" onSubmit={e => {
                e.preventDefault()
                if(!input.value.trim()) {
                    return
                }
                {dispatch(addTodo(input.value))}
                input.value = ''
            }}>
                <input type="text" ref={node => {
                    input = node
                }}/>
                <button type="submit">提交！</button>
            </form>
        </div>
    )
}

AddTodo = connect()(AddTodo)

export default AddTodo