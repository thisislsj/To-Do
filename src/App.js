import React, { useState } from "react";
import ToDoList from "./components/TodoList";
import './App.css'

const App = () => {
  //States to hold the list of todos and new todo input value
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  //Function to add a new Todo item to the list
  const addTodo = () => {
    setTodos([
      ...todos,
      { id: Date.now(), text: newTodo, completed: false }
    ]);
    setNewTodo('');
  }

  //Function to toggle completed status of a todo item
  const toggleTodo = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo));
  };

  const deleteTodo = id => {
    setTodos(todos.filter(todo => todo.id !== id));
  }

  return (
    <div className="to-do-app">
      <h1>To Do List</h1>
      {/* Input feild to add new todos */}
      <input
        type="text"
        value={newTodo}
        onChange={e => setNewTodo(e.target.value)}
        placeholder="Add a new Todo"
      />
      {/* Button to add a new todo */}
      <button onClick={addTodo}>Add</button>
      {/* Todo list component to display todos */}
      <ToDoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
    </div>
  );
}

export default App;
