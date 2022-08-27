
import { LazyLoadImage } from 'react-lazy-load-image-component';
import{useContext} from 'react'
import GalleryContext  from '../../context/GalleryContext'
import { CLOSE_LIGHTBOX } from '../../context/types/GalleryTypes';

const LightBox = () => {
  const {state,dispatch} = useContext(GalleryContext)
  const {lbStatus, currentLightBox} = state
  console.log(currentLightBox)

 const resetLightBox = (e) => {
   const className= e.target.getAttribute('class')
   if(className === 'gallery__lightbox'){
       dispatch({type:CLOSE_LIGHTBOX})
   }

 }

  return (

    lbStatus ? (
      <>
       <div className="gallery__lightbox" onClick={resetLightBox}>
          <h4>Pakistan</h4>
          <div className="gallery__lightbox__card">
            <div className="gallery__lightbox__card__image">
              <LazyLoadImage src={currentLightBox.image} alt="image" />
            </div>
          </div>
       </div>


      </>
    ): ('')
 
 );
};

export default LightBox;
