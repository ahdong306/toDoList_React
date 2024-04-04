import React, { useState } from 'react'

export const Tdlform = ({addTodo}) => {
    //const[todos, setTodos]=useState([])
    const [value, setValue] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        addTodo(value);
        setValue("");
    }
    return (
        <form className='TodoForm' onSubmit={handleSubmit}>
            <input type="text" className='todo-input' 
                placeholder='what is the task today?'
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />
            <button className='todo-btn' type='submit'>ADD task</button>
        </form>
    )
}