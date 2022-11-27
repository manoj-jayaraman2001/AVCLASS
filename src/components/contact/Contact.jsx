import React, { useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser';
import img from "../images/contact.jpg"
import Back from "../common/Back"
import "./contact.css"

const Contact = () => {

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth"
    });
  }, []);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_q998ics', 'template_7gl2x55', form.current, 'njgX8tAmXvtWMvhJ7')
      .then((result) => {
          console.log(result.text);
          window.location.reload(false);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <>
      <section className='contact mb'>
        <Back name='Contact Us' title='Get Helps & Friendly Support' cover={img} />
        <div className='container'>
          <div className="mapsection">
            {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3507.9591931727405!2d77.58200911500478!3d28.45064648249001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cbf94deb6bc39%3A0x7ba6bedc9a2b537f!2sBennett%20University%20(Times%20of%20India%20Group)!5e0!3m2!1sen!2sin!4v1669406398001!5m2!1sen!2sin" width="600" height="450"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3805.64721840301!2d78.38132301479764!3d17.476591288025183!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb936cd30e139f%3A0x92f5a835ac7c7742!2sAV%20Class%20Interiors!5e0!3m2!1sen!2sin!4v1669406682984!5m2!1sen!2sin" width="1000" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
          <form className='shadow' ref={form} onSubmit={sendEmail}>
            <h4>Fillup The Form</h4> <br />
            <div>
              <input type='text' placeholder='Name' name='from_name' />
              <input type='text' placeholder='Email' name='from_mail' />
            </div>
            <input type='text' placeholder='Subject' />
            <textarea cols='30' rows='10' name='message'></textarea>
            <button>Submit Request</button>
          </form>
        </div>
      </section>
    </>
  )
}

export default Contact
