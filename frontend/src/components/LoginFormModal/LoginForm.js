import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch } from "react-redux";
import DemoUser from '../Navigation/demouser'
import SignupFormModal from "../SignupFormModal/index";



function LoginForm() {
  const dispatch = useDispatch();
  const [credential, setCredential] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    return dispatch(sessionActions.login({ credential, password })).catch(
      async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
      }
    );
  };

  return (
    <div className="login-main-box">
      <h3 className="login-h3">Log In</h3>
      <form className="login-form" onSubmit={handleSubmit}>
        <ul>
          {errors.map((error, idx) => (
            <li className="errors-modals" key={idx}>• {error}</li>
          ))}
        </ul>
        <div className="login-label-input-div">
          <label id="login_label">
            Email
            <input id="login_text_input"
              type="text"
              value={credential}
              onChange={(e) => setCredential(e.target.value)}
            />
          </label>
          <label id="login_label">
            Password
            <input id="login_text_input"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
        </div>
        <div className="login-btn-div">
          <button id="login_button" type="submit">Log In</button>
        </div>  
        <div className="no_account_div">
          <p id="no_account">Don't have an account?</p>
          <SignupFormModal />
        </div>  
        <div className="demo_login_div">
          <p id="demo_login">Would like to lo in as a demo user? </p>
            <DemoUser />
        </div>
      </form>
    </div>
  );
}

export default LoginForm;