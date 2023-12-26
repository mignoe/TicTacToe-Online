import logo from './logo.svg';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import Login from './containers/login/Login.js';
import SignUp from './containers/signUp/SignUp.js';


import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signUp" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
