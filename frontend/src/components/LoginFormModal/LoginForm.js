import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch } from "react-redux";
import DemoUser from '../Navigation/demouser'



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
      <form onSubmit={handleSubmit}>
        <ul>
          {errors.map((error, idx) => (
            <li className="errors-modals" key={idx}>• {error}</li>
          ))}
        </ul>
        <div className="login-label-input-div">
          <label id="login_label_email">
            Username or Email
            <input id="login_text_input"
              type="text"
              placeholder="Please provide your Username or Email..."
              value={credential}
              onChange={(e) => setCredential(e.target.value)}
              // required
            />
          </label>
          <label id="login_label_password">
            Password
            <input id="login_text_input"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              // required
            />
          </label>
        </div>
        <button id="login_button" type="submit">Log In</button>
        <div>
          <button className="login-signup-demo-button">
            <DemoUser />
          </button>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;