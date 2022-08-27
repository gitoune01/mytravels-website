import React,{useContext} from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import GalleryContext from '../../context/GalleryContext';
import { OPEN_LIGHTBOX } from '../../context/types/GalleryTypes';

const GalleryImage = ({ gal }) => {
const {dispatch} = useContext(GalleryContext)
 
 const openLighBox = imgObject => {
     dispatch({ type: OPEN_LIGHTBOX,payload:imgObject})


 } 

  return (
    <div className="col-3">
      <div className="gallery__image">{<LazyLoadImage src={gal.image} onClick={()=> openLighBox(gal)}        />}</div>
    </div>
  );
};

export default GalleryImage;
