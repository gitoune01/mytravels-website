import React, { useContext, useState } from 'react';
import GalleryContext from '../../context/GalleryContext';
import GalleryImage from './GalleryImage';
import LightBox from './LightBox';

const GalleryComponent = () => {
  const [heading] = useState('Travellers captured pictures');
  const { state } = useContext(GalleryContext);
  const { gallery, lbStatus } = state;
  console.log('STATUS',lbStatus)
  return (
    <>
      {lbStatus ? <LightBox /> : ''}
      <div className="gallery">
        <div className="container">
          <h2 className="heading mb-55">{heading}</h2>
          <div className="row">
            {gallery.length > 0
              ? gallery.map((gal, index) => (
                  <GalleryImage gal={gal} key={index} />
                ))
              : ''}
          </div>
        </div>
      </div>
    </>
  );
};

export default GalleryComponent;
