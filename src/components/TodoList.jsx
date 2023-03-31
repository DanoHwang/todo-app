import React from 'react';

export const TodoList = ({ todos, onCheck }) => {
  const handleOnChange = (e) => {
    onCheck(e.target.value);
  };

  return (
    <>
      {todos.map((todo, index) => (
        <div key={`${todo.content}-${index}`}>
          <input
            type='checkbox'
            id={`${todo.content}-${index}`}
            value={todo.content}
            onChange={handleOnChange}
          />
          <label
            htmlFor={`${todo.content}-${index}`}
            className={todo.checked ? 'todo--checked' : 'todo--unchecked'}
          >
            {todo.content}
          </label>
        </div>
      ))}
    </>
  )
};
