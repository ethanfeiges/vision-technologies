import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './ContactUs.css'; // Import the CSS file

const ContactUs = () => {
  const form = useRef();
  const [popupVisible, setPopupVisible] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    sendEmail();
  };

  const showPopup = () => {
    setPopupVisible(true);
    setTimeout(() => {
    setPopupVisible(false);
    }, 3000);
  };

  const sendEmail = (e) => {
    emailjs
      .sendForm('service_0gtalyy', 'template_h5jn8ap', form.current, {
        publicKey: 'j-R6Z8JeHlzVwqmbM',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          showPopup();
          form.current.reset(); // Clear the form fields
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <div className="page-container">
      <h1 className="page-title">Contact Us</h1>
      <form ref={form} onSubmit={handleSubmit} className="form-container">
        <label>Name</label>
        <input type="text" name="user_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Phone</label>
        <input type="phone" name="user_phone" />
        <label>Message</label>
        <textarea name="message" />
        <input type="submit" value="Send" />
      </form>
      <div className={`popup ${popupVisible ? 'show' : ''}`}>
        Email sent successfully!
      </div>
    </div>
  );
};

export default ContactUs;
