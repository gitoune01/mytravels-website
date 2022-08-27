import React from 'react';

const ServicesLeft = ({ heading, subHeading }) => {
  console.log(subHeading)
  return (
    <>
      <div class="services__left">
        <h1 class="services__left__heading animation" >{heading}</h1>
        <p class="services__left__paragraph">{subHeading}</p>
      </div>
    </>
  );
};

export default ServicesLeft;
