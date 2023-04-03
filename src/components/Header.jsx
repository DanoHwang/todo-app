import React from 'react';
import { BsFillSunFill } from 'react-icons/bs';

export const Header = ({ checked, check, isBright, onBright }) => {
  const filters = ['All', 'Active', 'Completed'];

  const handleClick = (e) => {
    console.log(e.target.value)
    check(e.target.value);
  };

  const handleIconClick = () => {
    onBright(!isBright);
  };

  return (
    <div className={isBright ? 'header__box header__box--bright' : 'header__box'}>
      <BsFillSunFill
        className={isBright ? 'header__icon header__icon--bright' : 'header__icon'}
        onClick={handleIconClick}
      />
      <div>
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
