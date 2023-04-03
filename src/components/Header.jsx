import React from 'react';

export const Header = ({ checked, check }) => {
  const filters = ['All', 'Active', 'Completed'];

  const handleClick = (e) => {
    console.log(e.target.value)
    check(e.target.value);
  };

  return (
    <>
      {filters.map((filter) => {
        const isChecked = checked === filter;

        return (
          <button
            className={isChecked ? 'a' : 'b'}
            onClick={handleClick}
            value={filter}
            key={filter}
          >
            {filter}
          </button>
        );
      })}
    </>
  );
};
