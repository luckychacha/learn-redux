import React from 'react'

import Todo from './Todo'

const TodoList = ({ todos, addTodoClick }) => (
    <ul>
        {todos.map(todo =>
                <Todo
                    key={todo.id}
                    {...todo}
                    onClick={()=>addTodoClick(todo.id)}
                />
            )
        }
    </ul>
)

export default TodoList