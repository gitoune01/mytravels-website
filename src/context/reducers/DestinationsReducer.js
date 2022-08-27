import { DETAILS,CITIES } from '../types/DestinationsTypes';

const DestinationsReducer = (state, action) => {
  const { type, payload } = action;

  if (type === DETAILS) {
    const destination = state.destinations.find(
      (dest) => dest.id === parseInt(payload)
    );

    return {
      ...state,
      details: destination,
    };
  } else if(type === CITIES) {
      const filtered = state.cities.filter(c => parseInt(c.destinationId) === parseInt(payload))
      return{
        ...state,
        filteredCities: filtered,
      }

  }else{
    return state;
  }
};

export default DestinationsReducer;
