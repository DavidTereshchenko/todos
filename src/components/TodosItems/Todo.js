import React, { useState } from "react"
import './Todo.css'



export const Todo = ({ todo, todos, setTodos, onRemove }) => {

    const [checked, setChecked] = useState(false)
    const [textEdit, setTextEdit] = useState(true)
    const [changeTodo, setChangeTodo] = useState('')

    const pressSave = () => {
        todo.title = changeTodo
        let newTodos = todos.map(element => element.id === todo.id ? todo : element)
        setTodos(newTodos)
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

    const onPressCheckBox = () => {
        setTodos(
            todos.map(item => {
                if (item.id === todo.id) {
                    item.completed = !item.completed
                }

                return item
            })
        )
        setChecked(!checked)
    }

    if(textEdit) {
        return (
            <div className="todo-item">
                <div className="new-todo">
                    <input className="checkbox" type="checkbox"  checked={checked} onChange={handleChange} onClick={onPressCheckBox}/>
                    <label onDoubleClick={pressHandler}>{todo.title}</label>
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