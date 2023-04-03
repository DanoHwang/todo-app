import React from 'react';

import { Todo } from './Todo';

export const TodoList = ({ todos, onCheck, onDelete, filter, isBright }) => {
  const filteredTodos = todos.filter((todo) => {
    if (filter === 'Active') {
      return todo.checked === false;
    }

    if (filter === 'Completed') {
      return todo.checked === true;
    }

    return true;
  });

  return (
    <div className='todos__box'>
      {filteredTodos.map((todo) => (
        <Todo
          todo={todo}
          onCheck={onCheck}
          onDelete={onDelete}
          key={todo.id}
          isBright={isBright}
        />
      ))}
    </div>
  );
};
