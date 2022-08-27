import React from 'react';
import { BsCheckSquare,BsX } from 'react-icons/bs';

const Facilities = ({name,value}) => {
  return (
    <>
      <div class="cities__body__contents__facilities">
        <div class="cities__body__contents__facilities__name">{name}</div>
        <div class="cities__body__contents__facilities__value">
          {value ? (
            <BsCheckSquare size={20} color="#34d399" />
          ) : (
            <BsX size={20} color="#ff4d58" />
          )}
        </div>
      </div>
    </>
  );
};

export default Facilities;
