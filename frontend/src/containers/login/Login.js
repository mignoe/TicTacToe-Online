import "./Login.css"

import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import submitUserData from "../../service.js"
import displayError from "../../utils.js";

function Login() {
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);

  const login = async () => {
    console.log("USERNAME => ", username);
    console.log("PASSWORD => ", password);

    let response = await submitUserData(username, password, "/login");
    
    if (response.status === 200) {
      window.location.href = "/hub";
    } else {
      displayError(response.message)
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    login();
  };

  return (

    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <input name="username" type="text" placeholder="Username" id="username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <input type="password" placeholder="Password" id="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <Link to="/signUp">Sign Up</Link>
        <p id="error-message"></p> 
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
