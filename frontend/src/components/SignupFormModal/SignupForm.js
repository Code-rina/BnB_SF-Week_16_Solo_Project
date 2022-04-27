import React, { useState } from "react";
import { useDispatch } from "react-redux";
import * as sessionActions from "../../store/session";
import LoginFormModal from '../LoginFormModal/index'
import DemoUser from '../Navigation/demouser'


function SignupForm() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      setErrors([]);
      return dispatch(sessionActions.signup({ email, username, password }))
        .catch(async (res) => {
          const data = await res.json();
          if (data && data.errors) setErrors(data.errors);
        });
    }
    return setErrors(['Confirm Password field must be the same as the Password field']);
  };

  return (
    <div className="login-main-box">
      <h3 className="login-h3">Sign Up</h3>
      <form className="login-form" onSubmit={handleSubmit}>
        <ul>
          {errors.map((error, idx) => <li className="errors-modals" key={idx}>• {error}</li>)}
        </ul>
          <div className="login-label-input-div">
            <label id="login_label">
              Email
              <input id="login_text_input"
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
            <label id="login_label">
              Username
              <input id="login_text_input"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
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
            <label id="login_label">
              Confirm Password
              <input id="login_text_input"
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </label>
            </div>
            <div className="login-btn-div">
              <button id="login_button" type="submit">Sign Up</button>
            </div>
            <div className="no_account_div">
              <p id="no_account">Already have an have an account?</p>
              <LoginFormModal />
            </div>  
            <div className="demo_login_div">
              <p id="demo_login">Would like to lo in as a demo user? </p>
              <DemoUser />
            </div>
      </form>
    </div>
  );
}

export default SignupForm;