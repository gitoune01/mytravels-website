import { CLOSE_LIGHTBOX, OPEN_LIGHTBOX } from '../types/GalleryTypes';

const GalleryReducer = (state, action) => {
  if (action.type === OPEN_LIGHTBOX) {
    return {
      ...state,
      lbStatus: true, //copy of actual state for saving
      currentLightBox: action.payload,
    };
  } else if (action.type === CLOSE_LIGHTBOX) {
    return {
      ...state,
      lbStatus: false,
      currentLightBox: null,
    };
  }
};

export default GalleryReducer;
