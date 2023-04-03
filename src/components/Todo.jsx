import React from 'react';

export const Todo = ({ todo, onCheck, onDelete }) => {
  const handleOnChange = (e) => {
    onCheck(e.target.id);
  };

  const handleButtonClick = (e) => {
    onDelete(e.target.id)
  }

  return (
    <div>
      <input
        type='checkbox'
        id={todo.id}
        value={todo.content}
        onChange={handleOnChange}
      />
      <label
        htmlFor={todo.id}
        className={todo.checked ? 'todo--checked' : 'todo--unchecked'}
      >
        {todo.content}
      </label>
      <button
        id={todo.id}
        onClick={handleButtonClick}
      >
        delete
      </button>
    </div>
  )
};
