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

  const formatPhoneNumber = (value) => {
    const phoneNumber = value.replace(/[^\d]/g, '');
    const phoneNumberLength = phoneNumber.length;
    if (phoneNumberLength < 4) return phoneNumber;
    if (phoneNumberLength < 7) {
      return `${phoneNumber.slice(0, 3)}-${phoneNumber.slice(3)}`;
    }
    return `${phoneNumber.slice(0, 3)}-${phoneNumber.slice(3, 6)}-${phoneNumber.slice(6, 10)}`;
  };

  const handlePhoneChange = (e) => {
    const formattedPhoneNumber = formatPhoneNumber(e.target.value);
    e.target.value = formattedPhoneNumber;
  };

  return (
    <div className="page-container">
      <div className="contact-layout">
        <section className="contact-intro">
          <p className="eyebrow">Vision Technologies NW</p>
          <h1 className="page-title">Let&apos;s talk about your practice.</h1>
          <p className="intro-copy">
            Tell us what equipment you are looking for, and our team will help you find the right fit.
          </p>
          <div className="contact-details">
            <a href="mailto:ophthalmicservs@hotmail.com">ophthalmicservs@hotmail.com</a>
            <a href="tel:4255039359">(425) 503-9359</a>
          </div>
        </section>
        <form ref={form} onSubmit={handleSubmit} className="form-container">
          <div className="form-heading">
            <h2>Send us a message</h2>
            <p>We&apos;ll get back to you as soon as possible.</p>
          </div>
          <label htmlFor="user-name">Name</label>
          <input id="user-name" type="text" name="user_name" autoComplete="name" required />
          <label htmlFor="user-email">Email</label>
          <input id="user-email" type="email" name="user_email" autoComplete="email" required />
          <label htmlFor="user-phone">Phone</label>
          <input id="user-phone" type="tel" name="user_phone" onChange={handlePhoneChange} maxLength="12" autoComplete="tel" />
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" required />
          <button type="submit">Send message</button>
        </form>
      </div>
      <div className={`popup ${popupVisible ? 'show' : ''}`}>
        Email sent successfully!
      </div>
    </div>
  );
};

export default ContactUs;
