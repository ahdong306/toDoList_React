import React, { useState } from 'react'

export const EditTodoForm = ({editTodo,task}) => {
    //const[todos, setTodos]=useState([])
    const [value, setValue] = useState(task.task);
    const handleSubmit = (e) => {
        e.preventDefault();
        editTodo(value, task.id);
        setValue("");
    }
    return (
        <form className='TodoForm' onSubmit={handleSubmit}>
            <input type="text" className='todo-input' 
               
                placeholder='Update Task'
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />
            <button className='todo-btn' type='submit'>Update task</button>
        </form>
    )
}