import { useState, useReducer} from 'react';
import { createContext } from 'react';
import reducer from './reducer';
import { OPEN_MODAL,CLOSE_MODAL,OPEN_MENU,CLOSE_MENU} from './actions';


//init values

const initialState = {
   modalStatus:false,
   current:'',
 }
const AppContext = createContext();
const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState );
  const openModal = (toggle) => {
    dispatch({ type:OPEN_MODAL,payload:toggle});
  };
 
  const closeModal = () => {
    dispatch({ type:CLOSE_MODAL});
  };

  return (
    <AppContext.Provider
      value={{ state, dispatch, openModal, closeModal }}
    >{children}</AppContext.Provider>
  );
};

export { AppProvider, AppContext ,initialState};
