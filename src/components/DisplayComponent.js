import React from 'react'
import { RiCloseCircleLine } from 'react-icons/ri'

const DisplayComponent = ({ todo, removeTodo }) => {
  return (
    <div className='todo-row'>
      <div>
        {todo.text}
      </div>
      <div className="icons">
        <RiCloseCircleLine
          onClick={() => removeTodo(todo.id)}
          className='delete-icon'
        />
      </div>
    </div>

  )
}

export default DisplayComponent