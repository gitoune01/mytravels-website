import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Header from '../components/Header'

const NotFound = () => {

  const [state] = useState({
    heading:'Oops, 404 Not Found...',
    paragraph:'Sorry, no such a page...',
    image:"/assets/images/404.jpg"
  })
  return (
    <>
      <Helmet>
        <title>Not Found</title>
        <meta name="description" content="travel friends Not Found page" />
      </Helmet>
       <Header heading={state.heading} paragraph={state.paragraph} image={state.image} >
         <Link to='/' className='btn-default'>go to home page</Link>
       </Header>
    

    </>
  );
};

export default NotFound;
