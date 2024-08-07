import React from 'react';
import './Contact.css';

// Social media icons
import { FaGithub, FaFacebookF, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';
import { CiLinkedin } from 'react-icons/ci';
import { GrInstagram } from 'react-icons/gr';
import { FaLocationCrosshairs } from "react-icons/fa6";

const Contact = () => {
  return (
    <footer className="contact" id='contact'>
      <h2>Contact Me</h2>
      <p>If you want to get in touch, feel free to reach out via social media or email.</p>
      <div className="contact-info">
        <div className="contact-item">
          <FaEnvelope className="contact-icon" />
          <a href="mailto:nambi@example.com">nambimr2004@example.com</a>
        </div>
        <div className="contact-item">
          <FaPhoneAlt className="contact-icon" />
          <span>+91 6374618016</span>
        </div>
        <div className="contact-item">
          <FaLocationCrosshairs className="contact-icon" />
          <span>Bengaluru</span>
        </div>
        <div className="social-media">
          <a href="https://github.com/NambiMR"><FaGithub /></a>
          <a href="https://www.linkedin.com/in/nambi25/"><CiLinkedin /></a>
          <a href="#"><FaFacebookF /></a>
          <a href="#"><GrInstagram /></a>
        </div>
      </div>
      {/* <p className="footer">&copy; 2024 Nambi Muthu Raja. All rights reserved.</p> */}
    </footer>
  );
}

export default Contact;
