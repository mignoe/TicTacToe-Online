import logo from './logo.svg';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import Login from './containers/login/Login.js';

import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        
        <Routes>
          <Route path="/" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
