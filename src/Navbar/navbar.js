import './nav.css';
import { Link } from 'react-router-dom';
import{
    BrowserRouter as Router, Routes, Route, Switch
  } from 'react-router-dom';
import SigninButton from '../Signinbtn';
const Navbar = () => {
 
    return ( 

        <div className="Navbar">
            <div className="logo">
                <img src={require("./av-logo-modified.png")} alt={"logo"} width = {100} height = {100}/> 
            </div>
          
            <div className="links">
                <button className='btnest'>Get Estimate</button>
                <button className='homebtn'>Home</button>
                <button className='aboutbtn'>About Us</button>
                <button className='gallbtn'>Gallery</button>
                <button className='contactbtn'>Contact Us</button>


            </div>
            
            
            
          <div className="signinbtn">

                <SigninButton/>
          </div>  
           

        </div>
     );
}
  
export default Navbar;