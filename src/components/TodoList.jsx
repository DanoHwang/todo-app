import React from 'react';

import { Todo } from './Todo';

export const TodoList = ({ todos, onCheck, onDelete }) => {
  return (
    <>
      {todos.map((todo) => (
        <Todo
          todo={todo}
          onCheck={onCheck}
          onDelete={onDelete}
          key={todo.id}
        />
      ))}
    </>
  );
};
