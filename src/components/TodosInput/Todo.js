import React, { useState } from "react";
import './Todo.css'

export const Todo = ({todo, todos, setTodos, onRemove }) => {

    const [checked, setChecked] = useState(false)
    const [textEdit, setTextEdit] = useState(true)
    const [changeTodo, setChangeTodo] = useState('')

    const pressSave = () => {
        todo.title = changeTodo
        const newTodos = todos.map(element => element.id === todo.id ? todo : element)
        console.log(newTodos)
        // setTodos(newTodos)
        setTextEdit(!textEdit)
    }

    const pressHandler = () => {
        setTextEdit(!textEdit)
        setChangeTodo(changeTodo)
    }

    const handleChange = () => {
        setChecked(!checked)
    }

    const removeHandler = () => {
        onRemove(todo.id)
    }

    const pressKey = event => {
        if(event.key === 'Enter') {
            pressSave()
        }
    }

    if(textEdit) {
        return (
            <div className="todo-item" onDoubleClick={pressHandler}>
                <div className="new-todo">
                    <input className="checkbox" type="checkbox" id="myCheck" checked={checked} onChange={handleChange}/>
                    <label>{todo.title}</label>
                </div>
                <div className="remove">
                    <button onClick={removeHandler}>×</button>
                </div>    
            </div>
        )   
    } else { 
        return (
            <div className="todo-item">
                <input 
                    className="text-edit"
                    type="text" 
                    onChange={e => setChangeTodo(e.target.value)}
                    value={changeTodo}
                    placeholder={todo.title}
                    onKeyDown={pressKey}
                />
            </div>  
        )
    }
}