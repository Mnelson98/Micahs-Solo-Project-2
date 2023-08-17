import React from 'react'
import { MdDoneOutline } from 'react-icons/Md'

const DisplayComponent = ({ todo, removeTodo }) => {
  return (
    <div className='todo-row'>
      <div>
        {todo.text}
      </div>
      <div className="icons">
        <MdDoneOutline
          onClick={() => removeTodo(todo.id)}
          className='delete-icon'
        />
      </div>
    </div>

  )
}

export default DisplayComponent