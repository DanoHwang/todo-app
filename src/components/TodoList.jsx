import React from 'react';

export const TodoList = ({ todos }) => {
  return (
    <>
      {todos.map((todo) => (
        <div>{todo.content}</div>
      ))}
      <div></div>
    </>
  )
};
