
import './App.css';
import React from 'react';
import './App.css';
import{
  BrowserRouter as Router, Routes, Route
} from 'react-router-dom';
import Navbar from './Navbar/navbar';
import Home from './Home/home';
import About from './Aboutus/about';


function App() {
  return (
    <div className="App">
      
      <div>
        <Home/>
      </div>
      
     
    </div>
  );
}

export default App;
