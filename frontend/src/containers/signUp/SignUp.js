import "./SignUp.css"
import React, { useState } from 'react';
import submitUserData from "../../service.js"
import displayError from "../../utils.js";


function SignUp() {
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const [confirmPassword, setConfirmPassword] = useState(null);

  const signUp = async () => {
    console.log("USERNAME => ", username);
    console.log("PASSWORD => ", password);
    
    let response = await submitUserData(username, password, "/signUp");
    
    if (response.status === 200) {
      window.location.href = "/login";
    } else {
      displayError(response.message);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      signUp();
    } else {
      displayError("Passwords do not match. Please try again.");
    }
  };

  return (
    <div className="signup-container">
      <form className="signup-form" onSubmit={handleSubmit}>
        <input
          name="username"
          type="text"
          placeholder="Username"
          id="username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          id="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="password"
          placeholder="Confirm Password"
          id="confirm-password"
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <p id="error-message"></p> 
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default SignUp;

