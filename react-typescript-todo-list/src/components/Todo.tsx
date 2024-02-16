import React from 'react'
import { FaPen, FaTrash  } from 'react-icons/fa'

export interface TaskInterface {
  task: String;
  id: Number;
  completed: Boolean;
}

export interface TodoInterface {
  task: TaskInterface;
  deleteTodo: Number;
  editTodo: Boolean;
  toggleComplete: Number;
}

export const Todo = ({task, deleteTodo, editTodo, toggleComplete}: TodoInterface) => { 
  return (
    <div className="Todo">
        <p className={`${task.completed ? 'completed' : ""}`} onClick={() => toggleComplete(todo.id)}>{task.task}</p>

        <div>
          <FaPen style={{marginRight: "8px"}} onClick={() => editTodo(task.id)} />
          <FaTrash onClick={() => deleteTodo(task.id)}/>
        </div>
    </div>
  )
}