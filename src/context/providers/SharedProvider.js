import React, { useReducer } from 'react';
import SharedReducer from '../reducers/SharedReducer';
import SharedContext from '../SharedContext';
import services from '../../data/services';
import reviews from '../../data/reviews';


const SharedProvider = ({ children}) => {
  const [sharedData, dispatch] = useReducer(SharedReducer, {
    services,
    reviews
  });

  return (
    <SharedContext.Provider value={{ sharedData, dispatch }}>
      {children}
    </SharedContext.Provider>
  );
};

export default SharedProvider;
