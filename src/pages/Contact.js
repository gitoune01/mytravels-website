import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import ContactForm from '../components/pages-parts/ContactForm';
import PageContainer from '../components/pages-parts/PageContainer';

const Contact = () => {
  const [state] = useState({
    heading: 'Contact us',
    pageHeading: 'Leave your message in the contact form',
    message:
      ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis asperiores similique voluptas hic sapiente officia saepe ab reprehenderit consequuntur fugit dicta vero, facilis aspernatur sint error quis placeat animi nemo! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis asperiores similique voluptas hic sapiente officia saepe ab reprehenderit consequuntur fugit dicta vero, facilis aspernatur sint error quis placeat animi nemo!',
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Helmet>
        <title>Contact page</title>
        <meta name="description" content="travel friends contact page" />
      </Helmet>
      <PageContainer data={state}>
          <ContactForm />
      </PageContainer>
    </>
  );
};

export default Contact;
