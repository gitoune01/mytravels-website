import React from 'react';
import DestinationDetails from './DestinationDetails';

const DestinationInfo = ({ details }) => {
  return (
    <div className="destination-info">
      <div className="container headingAnimation">
        <h2 className="heading">overview</h2>
        <div className="row">
          <div class="col-8">
            <p class="destination-info__p">{details.details}</p>
          </div>
        </div>
        <h2 class="heading headingAnimation" >Good to know</h2>
        <div class="row">
          <div class="col-8">
            <DestinationDetails  title="Languages" text={details.language} />
            <DestinationDetails  title="Currency" text={details.currency} />
           </div>
        </div>
      </div>
    </div>
  );
};

export default DestinationInfo;
