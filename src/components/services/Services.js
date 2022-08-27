import React, { useState, useContext } from 'react';
import ServicesLeft from './ServicesLeft';
import ServicesRight from './ServicesRight';
import SharedContext from '../../context/SharedContext';
import ServicesList from './ServicesList';

const Services = () => {
  const [state] = useState({
    heading:
      'Why customers love travel friends? because we provide unique services.',
    subHeading:
      'Our aim is to provide a unique service to customers, and we have provided high quality services to our customers that why they love travel friends',
  });

  const { sharedData } = useContext(SharedContext);
  const { services } = sharedData;
  console.log(sharedData)

  return (
    <div className="services">
      <div class="services__contents">
        <div class="container">
          <div class="row ml-minus-15 mr-minus-15 services__contents__container">
            <div class="col-6 p-15">
              <ServicesLeft
                heading={state.heading}
                subHeading={state.subHeading}
              />
            </div>
            <div class="col-6 p-15">
              <ServicesList services={services} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
