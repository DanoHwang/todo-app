import { useState } from 'react';
import './App.css';

import { Header } from './components/Header';
import { TodoInput } from './components/TodoInput';
import { TodoList } from './components/TodoList';

function App() {
  const [ filter, setFilter ] = useState('All');
  const [ todos, setTodos ] = useState([]);

  const handleAddClick = (newTodo) => {
    const newTodos = [
      ...todos,
      newTodo
    ];

    setTodos(newTodos);
  };

  const handleCheck = (id) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) { todo.checked = !todo.checked; }

      return todo;
    });

    setTodos(updatedTodos);
  };

  const handleDelete = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);

    setTodos(updatedTodos);
  };

  return (
    <div className='App'>
      <div className='box'>
        <Header checked={filter} check={setFilter} />
        <TodoList todos={todos} onCheck={handleCheck} onDelete={handleDelete} />
        <TodoInput onAdd={handleAddClick} />
      </div>
    </div>
  );
}

export default App;
