import "./Login.css"
import React, { useState } from 'react';
import submitUserData from "../../service.js"
import { Link } from 'react-router-dom';

function Login() {
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);

  const login = () => {
    	console.log("USER => ", username)
    	console.log("PASS => ", password)
	submitUserData(username, password, "/login")	
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
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
