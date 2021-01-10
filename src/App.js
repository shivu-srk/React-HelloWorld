import React from "react";
import "./App.css";
import {useState} from 'react';

function Todo({ todo, index, completeTodo, removeTodo }) {
  return (
    <div className="todo">
      {todo.text}
      <div>
        <button onClick={() => removeTodo(index)}>COMPLETED</button>
      </div>
    </div>
  );
}

function TodoForm({ addTodo }) {
  const [value, setValue]=useState("");

  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Add A To-Do Item..."
        type="text"
        className="input"
        value={value}
        onChange={e => setValue(e.target.value)}
      />
    </form>
  );
}

function App() {
  const [todos, setTodos] = useState([
    {
      text: "Buy Groceries"
    },
    {
      text: "Call Shivu at 4 p.m."
    }
  ]);

  const addTodo = text => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  const removeTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className="app">
      <h1>To-Do List</h1>
      <div className="todo-list">
        {todos.map((todo, index) => (
          <Todo
            key={index}
            index={index}
            todo={todo}
            removeTodo={removeTodo}
          />
        ))}
        <TodoForm addTodo={addTodo} />
      </div>
    </div>
  );
}

export default App;