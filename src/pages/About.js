import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import AboutImage from '../components/pages-parts/AboutImage';
import PageContainer from '../components/pages-parts/PageContainer';

const About = () => {
  const [state] = useState({
    heading: 'about us',
    pageHeading: 'World best travel company since 2005',
    message:
      ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis asperiores similique voluptas hic sapiente officia saepe ab reprehenderit consequuntur fugit dicta vero, facilis aspernatur sint error quis placeat animi nemo! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis asperiores similique voluptas hic sapiente officia saepe ab reprehenderit consequuntur fugit dicta vero, facilis aspernatur sint error quis placeat animi nemo!',
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Helmet>
        <title>About page</title>
        <meta name="description" content="travel friends about page" />
      </Helmet>
      <PageContainer data={state}>
        <AboutImage />
      </PageContainer>
    </>
  );
};

export default About;
