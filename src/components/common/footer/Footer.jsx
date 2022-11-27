import React from "react"
import { footer } from "../../data/Data"
import "./footer.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { BsInstagram } from 'react-icons/bs';
import { BsFacebook } from 'react-icons/bs';
import { BsLinkedin } from 'react-icons/bs'
import { BsTwitter } from 'react-icons/bs';
import { IoMdCall } from 'react-icons/io';
import { AiOutlineMail } from 'react-icons/ai';
import { BiMap } from 'react-icons/bi';
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <section className='footerContact'>
        <div className='container'>
          <div className='send flex'>
            <div className='text'>
              <h1>Do You Have Questions?</h1> <br/>
              <p>We Can Also Create New Designs For Your Preferences.</p>
            </div>
            <Link to={"/contact"}><button className='btn5'>Contact Us Today</button></Link>
          </div>
        </div>
      </section>

      <footer>
        {/* <div className='container'>
          <div className='box'>
            <div className='logo'>
              <img src='../images/logo-light.png' alt='' />
              <h2>Do You Need Help With Anything?</h2>
              <p>Receive updates, hot deals, tutorials, discounts sent straignt in your inbox every month</p>

              <div className='input flex'>
                <input type='text' placeholder='Email Address' />
                <button>Subscribe</button>
              </div>
            </div>
          </div>

          {footer.map((val) => (
            <div className='box'>
              <h3>{val.title}</h3>
              <ul>
                {val.text.map((items) => (
                  <li> {items.list} </li>
                ))}
              </ul>
            </div>
          ))}
        </div> */}

        <div className='socialicons'>
          {/* <FontAwesomeIcon icon="fa-brands fa-instagram" /> */}

          <a href="https://instagram.com/avclassinteriors_?igshid=YmMyMTA2M2Y" target='blank'><BsInstagram size={30} /></a>
          <a href="https://www.facebook.com/profile.php?id=100083414385634&mibextid=ZbWKwL" target='blank'><BsFacebook size={30} /></a>
          <BsLinkedin size={30} />
          <a href="https://www.facebook.com/profile.php?id=100083414385634&mibextid=ZbWKwL" target='blank'><BsTwitter size={30} /></a>
         
          
        </div>
        <div className="contactdetails">
          <span>
            <IoMdCall size={25}/> &nbsp; | &nbsp;<a href="tel:9966212221">+91 9966212221</a>
            </span>
            <span>
            <AiOutlineMail size={25}/>&nbsp; |&nbsp; <a href="mailto:avclassinterior@gmail.com">avclassinterior@gmail@gmail.com</a>
            </span>
        </div>
        <div className="address_section">
            <BiMap size={25}/>AV Class Interiors
indu fortune fields gardenia, 13th Phase Rd, Kukatpally Housing Board Colony, Hyderabad, Telangana 500072
        </div>


      </footer>
      <div className='legal'>
        <span>©copyright AVCLASS Interiors</span>
      </div>
    </>
  )
}

export default Footer
