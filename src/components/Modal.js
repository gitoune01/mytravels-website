import React, { useContext } from 'react';
import { AppContext } from '../context/appContext';

const Modal = ({ children, current }) => {
  const { state, closeModal } = useContext(AppContext);
  const close = (e) => {
    if (e.target.getAttribute('className') === 'modal') {
      closeModal();
    }
  };

  return state.modalStatus && state.current === current ? (
    <div className="modal" onClick={close}>
      <div className="modal__body">{children}</div>
    </div>
  ) : (
    ''
  );
};

export default Modal;
