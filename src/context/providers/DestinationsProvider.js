import { useReducer } from 'react';
import DestinationsContext from '../DestinationsContext';
import DestinationsReducer from '../reducers/DestinationsReducer';
import { destinations } from '../../data/destinations';
import cities from '../../data/cities';
import Cities from '../../data/cities';

const DestinationsProvider = ({ children }) => {
  const [destinationsData, dispatch] = useReducer(DestinationsReducer, {
    destinations,
    cities:Cities,
    filteredCities:[],
    details:{}
  });

  return (
    <DestinationsContext.Provider value={{ destinationsData, dispatch }}>
      {children}
    </DestinationsContext.Provider>
  );
};

export default DestinationsProvider;
