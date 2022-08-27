import React from 'react';
import {Link} from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { GiPositionMarker } from 'react-icons/gi';

const DestinationsList = ({ dest }) => {
  return (
    <div className="col-3 p-15">
      <div className="destinations__card animation">
        <div className="destinations__card__img">
          <LazyLoadImage src={dest.image} alt="image" />
        </div>
        <div className="destinations__card__layer">
          <div className="destinations__card__layer__content">
            <GiPositionMarker size={20}/>
            <div className="destinations__card__layer__content__country">
              {dest.name}
            </div>
          </div>
        </div>
        <div className="destinations__card__info">
          <div className="destinations__card__info__text">
            <Link to={`/details/${dest.id}`} className="btn-white">
               Explore
            </Link>

          </div>
        </div>
      </div>

    </div>
  );
};

export default DestinationsList;
