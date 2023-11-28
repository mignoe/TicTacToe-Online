import "./Login.css"
import React, { useState } from 'react';

function Login() {

  return (

    <div className="login-container">
      <form className="login-form">
        <input type="text" placeholder="Username" id="username"/>
        <input type="password" placeholder="Password" id="password" />
        <button type="submit" onClick={Login()}>Login</button>
      </form>
    </div>
  );
}

function login() {
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;
  console.log(username + " " + password)
}

export default Login;
