import React from 'react';
import CityImages from './CityImages';
import CitiesContent from './CitiesContent';

const Cities = ({ cities, name }) => {
 
  return (
    <div className="cities">
      <div className="container">
        <div className="cities__container">
          <h2 className="heading">cities in {name}</h2>
          <div className="row ml-minus-15 mr-minus-15">
            {cities.length > 0
              ? cities.map((city) => (
                  <div className="col-3 p-15" key={city.id}>
                    <div className="cities__body">
                      <CityImages image={city.image} status={city.status} />
                       <CitiesContent name={city.name} status={city.duration} price={city.price} room={city.room} food={city.food}/>
                    </div>
                  </div>
                ))
              : `No cities in ${name}`}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cities;
