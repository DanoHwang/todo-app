import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

export const TodoInput = ({ onAdd }) => {
  const [ content, setContent ] = useState("");

  const handleButtonClick = () => {
    const data = {
      id: uuidv4(),
      content,
      checked: false,
    };

    onAdd(data);
    setContent("");
  };

  const handleChange = (e) => setContent(e.target.value);

  return (
    <div className='input-bar__wrapper'>
      <div className='input-bar'>
        <input
          className='input-bar__input'
          type='text'
          value={content}
          onChange={handleChange}
          placeholder='Add Todo'
        />
        <button
          className='input-bar__button'
          onClick={handleButtonClick}
        >
          Add
        </button>
      </div>
    </div>
  );
};
