import React, { useState } from 'react';
import { BiChevronRight } from 'react-icons/bi';
const ServicesList = ({ services }) => {
  const [current, setCurrent] = useState();
  console.log(current);

  return services.length > 0
    ? services.map((service, index) => (
        <div class="services__list animation" key={index}>
          <h4
            class={`{services__list__heading ${
              current === index
                ? 'services__list__heading--active'
                : 'services__list__heading--normal'
            }`}
            onClick={() => setCurrent(index)}
          >
            <BiChevronRight
              size={20}
              color={`${current === index ? '#ff4d58' : 'black'}`}
              className={`${
                current === index ? 'services__rotate' : 'services__back'
              }`}
            />
            {service.heading}
          </h4>
          <p
            class={`services__list__details ${
              current === index ? 'services__list__details--show' : ''
            }`}
          >
            {service.p}
          </p>
        </div>
      ))
    : '';
};
export default ServicesList;
