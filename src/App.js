import { useState } from 'react';
import './App.css';

import { Header } from './components/Header';
import { TodoInput } from './components/TodoInput';
import { TodoList } from './components/TodoList';

function App() {
  const [ filter, setFilter ] = useState('All');
  const [ todos, setTodos ] = useState([]);
  const [ isBright, setIsBright ] = useState(false);

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
      <div className={isBright ? 'box' : 'box box--dark'}>
        <Header
          checked={filter}
          check={setFilter}
          isBright={isBright}
          onBright={setIsBright}
        />
        <TodoList
          todos={todos}
          onCheck={handleCheck}
          onDelete={handleDelete}
          filter={filter}
          isBright={isBright}
        />
        <TodoInput
          onAdd={handleAddClick}
          isBright={isBright}
        />
      </div>
    </div>
  );
}

export default App;
