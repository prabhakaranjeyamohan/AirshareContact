import React, { useRef }from 'react';
import '../styles/Contact.css';
import contactPic from '../assets/pics/Production Ready.png'
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

//import {Form, Row, Col, Button, FloatingLabel} from 'react-bootstrap';

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
  e.preventDefault();

  emailjs.sendForm('service_buh8j5l', 'template_5temdiq', form.current, 'AM0wglsw7C7NzVk5a')
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });
};

  const notify = () => toast("Your Message has been sent!");

  return (
    <div className="contact">
   
      <div
        className="leftSide"
        //style={{ backgroundImage: `url(${contactPic})` }}
      ><img src = { contactPic } alt=''></img></div>
      <div className="rightSide">
        <h1> Contact Us</h1>

        <form id="contact-form" method="POST" ref={form} onSubmit={sendEmail}>
          <label htmlFor="name">Full Name</label>
          <input name="name" placeholder="Enter full name..." type="text" />
          <label htmlFor="email">Email</label>
          <input name="email" placeholder="Enter email..." type="email" />
          <label htmlFor="message">Message</label>
          <textarea
            rows="6"
            placeholder="Enter message..."
            name="message"
            required
          ></textarea>
          <button type="submit" onClick={notify}> Send Message</button>
          <ToastContainer />
        </form>
      </div>
    </div>
  )
}

export default Contact