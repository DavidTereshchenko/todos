import React, { useState } from 'react';
import {AddTodo} from './components/TodoItem/AddTodo';
import { Navbar } from './components/TodoNavbar/Navbar';
import { Todo } from './components/TodosInput/Todo';
import './App.css'

function App() {
  const [todos, setTodos] = useState([])

  const addTodo = (title) => {
    setTodos(prev => [...prev, {
      id: Date.now().toString(),
      title
    } ])
  }

  const removeTodo = id => {
    setTodos(prev => prev.filter(todo => todo.id !== id))
  }

  
  return (
    <div className="container">
      <Navbar title="todos"/>
      <AddTodo onSubmit={addTodo}/>
      <div>
        {todos.map(todo => (
          <Todo todo={todo} key={todo.id} onRemove={removeTodo} setTodos={setTodos} todos={todos} />
        ))}
      </div>
    </div>
  );
};

export default App;
