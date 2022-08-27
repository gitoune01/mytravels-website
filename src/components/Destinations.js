import React, { useState, useContext } from 'react';
import DestinationsContext from '../context/DestinationsContext';
import { destinations } from '../data/destinations';
import DestinationsList from './DestinationsList';

const Destinations = () => {
  const {
    destinationsData: { destinations },
    dispatch,
  } = useContext(DestinationsContext);
  const [state] = useState({
    heading:
      'Discover the most engaging places in the world with Travel Friends',
    paragraph:
      'Travel is a brutality. It forces you to trust strangers and to lose sight of all that familiar comforts of home and friends.You are constantly of balance. Nothing is yours except the essential things Air, Sleep, Dream, the sea, the sky-all things tending towards the eternal or what we imagine of it.',
  });

  return (
    <div className="destinations">
      <div className="container">
        <div className="row ml-minus-15 mr-minus-15">
          <div className="col-6">
            <h3 className="destinations__heading p-15 animation">{state.heading}</h3>
          </div>
          <div className="col-6">
            <h3 className="destinations__paragraph p-15 animation">{state.paragraph}</h3>
          </div>
        </div>
        <div class="destinations__block">
          <div class="row ml-minus-15 mr-minus-15">
            {destinations.map((dest) => (
              <DestinationsList dest={dest} key={dest.id} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Destinations;
