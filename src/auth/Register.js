import React, { useContext, useState } from 'react';

import { AppContext } from '../context/appContext';
const Register = ({ currentModal }) => {
  const { openModal } = useContext(AppContext);
  const [state, setState] = useState({
    name: '',
    email: '',
    password: '',
  });

  const registerForm = (e) => {
       e.preventDefault()
       console.log(state)
  }

  

  return (
    <form className="modal__register" onSubmit={registerForm}>
      <div className="modal__heading">
        <h3>Create new account</h3>
      </div>
      <div className="group">
        <input
          type="text"
          name=""
          className="group__control"
          placeholder="enter your name"
          onChange={(e) => setState({ ...state, name: e.target.value })}
          value={state.name}
        />
      </div>
      <div className="group">
        <input
          type="email"
          name=""
          className="group__control"
          placeholder="enter your email"
          onChange={(e) => setState({ ...state, email: e.target.value })}
          value={state.email}
        />
      </div>
      <div className="group">
        <input
          type="password"
          name=""
          className="group__control"
          placeholder="enter your password"
          onChange={(e) => setState({ ...state, password: e.target.value })}
          value={state.password}
        />
      </div>
      <div className="group model__row">
        <input type="submit" name="" className="btn-dark" value="Register" />
        <span className="" onClick={() => openModal(currentModal)}>
          Already Have an Account?
        </span>
      </div>
    </form>
  );
};

export default Register;
