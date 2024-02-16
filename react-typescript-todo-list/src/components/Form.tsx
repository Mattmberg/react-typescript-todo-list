import React, {useState} from 'react'

const addTodo = () => {
  const newTask = {
    
  }
}

export const Form = ({addTodo}) => {
    const [value, setValue] = useState('');

    const handleSubmit = (event: ChangeEvent<HTMLInputElement>) => {
        event.preventDefault();
        if (value) {
          addTodo(value);
          setValue('');
        }
      };
  return (
    <form onSubmit={handleSubmit} className="TodoForm">
    <input type="text" value={value} onChange={(e) => setValue(e.target.value)} className="todo-input" placeholder='Next Task' />
    <button type="submit" className='todo-btn'>Add Task</button>
  </form>
  )
}