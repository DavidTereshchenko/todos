import './Todo.css'

export const ChangeStyle = ({checked, removeHandler, todo, handleChange}) => {
    return (
        <div className="todo-item">
            <div className="new-todo">
                <input type="checkbox" id="myCheck" checked={checked} onChange={handleChange}/>
                <label id="text">{todo.title}</label>
            </div>
            <div className="remove">
                <button onClick={removeHandler}>×</button>
            </div>    
        </div>
    )
}