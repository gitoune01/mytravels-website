import React, { useContext, useState } from 'react';
import SharedContext from '../../context/SharedContext';
import ReviewBody from './ReviewBody';

const Reviews = () => {
  const [heading] = useState('What our customers are saying about us?');
  const { sharedData } = useContext(SharedContext);
  const { reviews } = sharedData;

  return (
    <div className="reviews">
      <div className="container">
        <h2 className="heading animation">{heading}</h2>
        <div className="row ml-minus-15 mr-minus-15">
          {reviews.length > 0 ? reviews.map((review, index) => <ReviewBody review={review} key={index} />) : ''}
        </div>
      </div>
    </div>
  );
};

export default Reviews;
