import React from 'react';
import { BsFillStarFill, BsStar } from 'react-icons/bs';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const ReviewBody = ({ review }) => {
  const rating = (nbstars) => {
   
    const showStars = [];
    for (let i = 1; i < 5; i++) {
      if (i <= nbstars) {
        showStars.push(<BsFillStarFill size={13} key={i} color="#df2189" className='reviews__body__contents__info__ratings__icon'/>);
      } else {
       showStars.push(<BsStar size={13} key={i} color="#df2189" className='reviews__body__contents__info__ratings__icon'/>) ;
      }
    }
    return showStars
  };

  return (
    <div className="col-4 p-15">
      <div class="reviews__body animation">
        <div class="reviews__body__contents">
          <div class="reviews__body__contents__image">
            <LazyLoadImage src={review.image} alt="image" />
          </div>
          <div class="reviews__body__contents__info">
            <div class="reviews__body__contents__info__name">{review.name}</div>
            <div class="reviews__body__contents__info__rating">
              {/* <BsFillStarFill />
              {review.stars} */}
              {rating(review.stars)}
            </div>
            <div class="reviews__body__contents__info__comment">
              {review.comment}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewBody;
