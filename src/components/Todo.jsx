import React from 'react';
import { BsFillTrash3Fill } from 'react-icons/bs';

export const Todo = ({ todo, onCheck, onDelete, isBright }) => {
  const handleOnChange = (e) => {
    onCheck(e.target.id);
  };

  const handleButtonClick = (e) => {
    onDelete(e.target.id)
  }

  return (
    <div className={isBright ? 'todo' : 'todo todo--dark'}>
      <div className='todo__checkbox__wrapper'>
        <input
          className='todo__input'
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
      </div>
      <BsFillTrash3Fill
        id={todo.id}
        onClick={handleButtonClick}
      />
    </div>
  )
};
