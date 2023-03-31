import { useState } from 'react';
import './App.css';

import { TodoInput } from './components/TodoInput';
import { TodoList } from './components/TodoList';

function App() {
  const [ todos, setTodos ] = useState([]);

  const handleAddClick = (newTodo) => {
    const newTodos = [
      ...todos,
      newTodo
    ];

    setTodos(newTodos);
  };

  return (
    <div className='App'>
      <div className='box'>
        <TodoList todos={todos} />
        <TodoInput onAdd={handleAddClick} />
      </div>
    </div>
  );
}

export default App;
