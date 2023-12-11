import "./Login.css"
import React, { useState } from 'react';
import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.REACT_APP_ENV,
});

function Login() {

  return (

    <div className="login-container">
      <div className="login-form">
        <input type="text" placeholder="Username" id="username"/>
        <button type="submit" onClick={() => make_login()}>Login</button>
      </div>
    </div>
  );
}

function make_login() {
  let username = document.getElementById("username").value;
  
  instance.post(`/login?username=${username}`).then((response) => {
    localStorage.setItem("token", response.data.token);
    console.log(response.data);
  }).catch((error) => { console.log(error); });
}

export default Login;
