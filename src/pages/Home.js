import React, { useState, useContext, useEffect } from 'react';
import Header from '../components/Header';
import Modal from '../components/Modal';
import { Helmet } from 'react-helmet-async';
import { AppContext } from '../context/appContext';
import Register from '../auth/Register';
import Login from '../auth/Login';
import Destinations from '../components/Destinations';
import Services from '../components/services/Services';
import Reviews from '../components/reviews/Reviews';
import Gallery from '../components/Gallery/GalleryComponent';
import GalleryComponent from '../components/Gallery/GalleryComponent';
import Footer from '../components/footer/Footer';

const Home = () => {
  const {  dispatch, openModal } = useContext(AppContext);
  const [registerModal] = useState('registerModal');
  const [loginModal] = useState('loginModal');
  const [params] = useState({
    heading: 'We are travel friends',
    paragraph:
      '  Come an join us we travel the most famous an beautiful places in the world.',
  });


  useEffect(()=> {
    window.scrollTo(0,0)
  },[])

  return (
    <>
      <Helmet>
        <title>Travel Friends</title>
        <meta name="description" content="New way to run the world"/>
        <meta name="keywords" content="travel, travel tours, airline"/>
      </Helmet>
      <Header heading={params.heading} paragraph={params.paragraph}>
        <button
          className="btn-default"
          onClick={() => openModal(registerModal)}
        >
          Get Started
        </button>
      </Header>
      <Modal current={registerModal}>
        <Register currentModal={loginModal} />
      </Modal>
      <Modal current={loginModal}>
        <Login  currentModal={registerModal}/>
      </Modal>
      <Destinations />
      <Services />
      <Reviews />
      <GalleryComponent />
      <Footer />
    </>
  );
};

export default Home;
