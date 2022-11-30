import React, { useState } from "react"
import'./AddTodo.css'

export const AddTodo = ({onSubmit}) => {
    const [value, setValue] = useState('')

    const pressHandler = () => {
        if(value.trim()) {
            onSubmit(value)
            setValue('')
        } else {
            alert('error')
        }
    } 
    
    const pressKey = event => {
        if(event.key === 'Enter') {
            pressHandler()
        }
    }
    
    return(
        <div className="AddTodo">
            <input
                type="text"
                style={{fontFamily: 'Helvetica Neue'}} 
                placeholder="What need to be done ?" 
                onChange={e => setValue(e.target.value)}
                value={value}
                onKeyDown={pressKey}
            />
        </div> 
    )
}    