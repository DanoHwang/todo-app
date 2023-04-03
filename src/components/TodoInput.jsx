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
    <div className='input__bar'>
      <input
        type="text"
        value={content}
        onChange={handleChange}
      />
      <button onClick={handleButtonClick}>Add</button>
    </div>
  );
};
