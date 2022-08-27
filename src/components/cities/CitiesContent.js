import React from 'react';
import { BsStopwatch, BsCheckSquare, BsX } from 'react-icons/bs';
import Facilities from './Facilities';

const CitiesContent = ({name,duration,price,room,food}) => {
  const format = (price) => {
    return `${price}.00`;
  };

  return (
    <>
      <div className="cities__body__contents">
        <div className="cities__body__contents__top">
          <div className="cities__body__contents__top__name">{name}</div>
          <div className="cities__body__contents__top__name__duration">
            <BsStopwatch size={18} color="#df2189" />
            <div class="cities__body__contents__top__name__duration__time">
              {duration}
            </div>
          </div>
        </div>
        <div class="cities__body__contents__price">
          <span class="cities__body__contents__price__dollar">$</span>
          {format(price)}
        </div>
        <Facilities name="room" value={room} />
        <Facilities name="food" value={food} />
        <div class="cities__body__contents__button">
          <button className="btn-dark-sm">Buy Now</button>
        </div>
      </div>
    </>
  );
};

export default CitiesContent;
