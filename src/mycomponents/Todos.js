import React from 'react'
import TodoItems from './TodoItems'

export default function Todos({todos, onDelete}) {
  return (
    <div className='container'>
        <h3 className='my-3'>Todos List</h3>
        {
            todos.length === 0 ? "No Todos to display":
            todos.map(todo => (
                <TodoItems key={todo.sno} todo={todo} onDelete={onDelete}/>
            ))
        }
        
    </div>
  )
}
