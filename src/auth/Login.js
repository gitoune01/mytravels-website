import React, { useContext, useState } from 'react'
import { AppContext } from '../context/appContext';

const Login = ({currentModal}) => {
const {openModal} = useContext(AppContext)
const [state,setState] = useState({
    email:'',
    password:'',

})

const loginFrom = (e) => {
  e.preventDefault()
  console.log(state)

}
 
  return (
    <form className="modal__login" onSubmit={loginFrom} >
    <div className="modal__heading">
      <h3>Login</h3>
    </div>
    <div className="group">
      <input
        type="email"
        name=""
        className="group__control"
        placeholder="enter your email"
        onChange={(e)=> setState({...state,email: e.target.value})}
        value={state.email}
      />
    </div>
    <div className="group">
      <input
        type="password"
        name=""
        className="group__control"
        placeholder="enter your password"
        onChange={(e)=> setState({...state,password: e.target.value})}
        value={state.password}
      />
    </div>
    <div className="group model__row">
      <input
        type="submit"
        name=""
        className="btn-dark"
        value="Login"
      />
      <span onClick={()=> openModal(currentModal)}>Already Registered?</span>
    </div>
  </form>
  )
}

export default Login