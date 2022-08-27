import React, { useEffect, useContext } from 'react';
import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import DestinationsContext from '../context/DestinationsContext';
import { CITIES, DETAILS } from '../context/types/DestinationsTypes';
import DestinationInfo from '../components/DestinationInfo';
import Cities from '../components/cities/Cities';

const Details = () => {
  const params = useParams();
  const { id } = params;

  const { destinationsData, dispatch } = useContext(DestinationsContext);
  const { details, filteredCities} = destinationsData;

 
  useEffect(() => {
    dispatch({ type: DETAILS, payload: id });
    dispatch({ type:CITIES, payload:id})
    window.scrollTo(0,0)
  }, [id]);

  return (
    <>
     <Helmet><title>{details.name}</title></Helmet>
      <Header heading={details.name} image={details.bigImage}/>
      <DestinationInfo details={details}/>
      <Cities cities={filteredCities} name={details.name} />
    </>
  );
};

export default Details;
