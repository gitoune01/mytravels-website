import { useReducer } from 'react';
import GalleryReducer from '../reducers/GalleryReducer';
import GalleryContext from '../GalleryContext';
import gallery from '../../data/gallery';



const GalleryProvider = ({ children }) => {
  const [state, dispatch] = useReducer(GalleryReducer, {gallery,lbStatus:false,currentLightBox:{}});

  return (
    <GalleryContext.Provider value={{ state, dispatch }}>
       {children}
    </GalleryContext.Provider>
  );
};

export default GalleryProvider;
