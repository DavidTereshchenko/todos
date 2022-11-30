import React, { useState, useEffect } from 'react'
import {AddTodo} from './components/TodosInput/AddTodo'
import { Navbar } from './components/TodoNavbar/Navbar'
import { Todo } from './components/TodosItems/Todo'
import { TodosFilter } from './components/todosFilter/TodosFilter'
import './App.css'

function App() {
  const [todos, setTodos] = useState([])
  const [filtered, setFiltered] = useState(todos)
  const [activeAmount, setActiveAmount] = useState(0)

  const addTodo = (title) => {
    setTodos(prev => [...prev, {
      id: Date.now().toString(),
      title,
      completed: false
    } ])
  }

  const removeTodo = id => {
    setTodos(prev => prev.filter(todo => todo.id !== id))
  }

  useEffect(() => {
    setFiltered(todos)
    console.log(111, todos)
    setActiveAmount(countActiveTodos())
  }, [todos])

  const filterList = (filterType) => {
    console.log(1111, todos)
    switch(filterType) {  
      case 'active':
        let activeTodo = [...todos].filter( item => !item.completed )
        setFiltered(activeTodo)
        break
      case 'completed':
        let completedTodo = [...todos].filter( item => item.completed )
        setFiltered(completedTodo)
        break
      default:
        setFiltered(todos)
    }
  }

  const removeCompleted = () => {
    setTodos(todos.filter(todo => !todo.completed))
  }

  const countActiveTodos = () => todos.filter(todo => !todo.completed).length
  
  return (
    <div className="container">
      <Navbar title="todos"/>
      <AddTodo onSubmit={addTodo}/>
      <div>
        {filtered.map(todo => (
          <Todo todo={todo} key={todo.id} onRemove={removeTodo} setTodos={setTodos} todos={todos}/>
        ))}
      </div>
      <div className="footer">
        <div className="todos-count">{activeAmount} items left</div>
        <TodosFilter
          filterList={filterList}
        />
        <div className="clear-completed">
          <button onClick={removeCompleted}>Clear completed</button>
        </div>
      </div>  
    </div>
  );
};


export default App;
