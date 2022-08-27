import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const CityImages = ({image,status}) => {
  return (
    <>
      <div className="cities__body__image">
        <LazyLoadImage src={image} alt="image" />
        <div
          className={
            status === 'Bestselling'
              ? 'bestselling'
              : status === 'New'
              ? 'new'
              : status === 'Hot'
              ? 'hot'
              : ''
          }
        >
          {status}
        </div>
      </div>
    </>
  );
};

export default CityImages;
