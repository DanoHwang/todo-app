import React from 'react';
import { BsFillSunFill } from 'react-icons/bs';

export const Header = ({ checked, check }) => {
  const filters = ['All', 'Active', 'Completed'];

  const handleClick = (e) => {
    console.log(e.target.value)
    check(e.target.value);
  };

  return (
    <div className='header__box'>
      <BsFillSunFill className='header__icon' />
      <div className="header__title__wrapper">
        {filters.map((filter) => {
          const isChecked = checked === filter;

          return (
            <button
              className={isChecked ? 'header__title header__title--checked' : 'header__title'}
              onClick={handleClick}
              value={filter}
              key={filter}
            >
              {filter}
            </button>
          );
        })}
      </div>
    </div>
  );
};
