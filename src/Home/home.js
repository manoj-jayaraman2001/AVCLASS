
import React from 'react';
import Navbar from '../Navbar/navbar';
import{
    BrowserRouter as Router, Routes, Route
  } from 'react-router-dom';
import './home.css';
import Slider from '../Slider';


const Home = () => {
    return ( 
        <>
        <Router>
          <Routes>
            <Route  path='/'  element={<Navbar/>}/>
          </Routes>
        </Router>
            <div className='home'>
            <img
                    className="photo"
                    src="..\pics\c1.jpeg"
                    alt="First slide"
                  />
            </div>

            <div className="caption">
                <p>HYDERABAD'S MOST EXPERIENCED<br/>PROFESSIONAL INTERIOR DESIGNERS</p>
            </div>
        </>
        
     );
}
 
export default Home;