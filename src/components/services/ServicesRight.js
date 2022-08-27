import React from 'react';

const ServicesRight = ({ heading, subHeading }) => {
  console.log(subHeading)
  return (
    <>
      <div class="services__right">
        <h1 class="services__right__heading">{heading}</h1>
        <p class="services__right__paragraph">{subHeading}</p>
      </div>
    </>
  );
};

export default ServicesRight;
