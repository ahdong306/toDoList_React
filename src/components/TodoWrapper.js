import React, { useState } from 'react'
import { Tdlform } from './Tdlform'
import { v4 as uuidv4 } from 'uuid'
import { Todo } from './Todo'
import { EditTodoForm } from './EditTodoForm'
uuidv4()
export const TodoWrapper = () => {
    const [todos, setTodos] = useState([])

    const addTodo = todo => {
        // console.log(todos)
        console.log("in wrapper");
        setTodos([...todos, { id: uuidv4(), task: todo, completed: false, isEditing: false }])
        
    }
    const toggleCompleted = id=>{
        setTodos(todos.map(todo=>todo.id===id?{...todo, completed:!todo.completed}:todo))
    }
    const editTodo=id=>{
        setTodos(todos.map(todo=>todo.id===id?{...todo, isEditing:!todo.isEditing}:todo))
    }

    const deleteTodo = id => {
        setTodos(todos.filter(todo => todo.id !== id))
    }

    const editTask=(task, id)=>{
        setTodos(todos.map(todo=>todo.id===id?{...todo, task:task, isEditing:!todo.isEditing}:todo))
    }
    return (
        <div className='TodoWrapper'>
            <Tdlform addTodo={addTodo} />
            {todos.map((todo, index) => (
                todo.isEditing ? (
                    <EditTodoForm editTodo={editTask} task={todo}/>) : (
                        <Todo task={todo} key={index} toggleCompleted={toggleCompleted} deleteTodo={deleteTodo} editTodo={editTodo}/>
                    )
                
            ))}

        </div>
    )
}