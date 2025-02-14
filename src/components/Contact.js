import React from 'react';
import githubIcon from '../assets/icons/github.svg';
import linkedinIcon from '../assets/icons/linkedin.svg';
import emailIcon from '../assets/icons/email.svg';
import phoneIcon from '../assets/icons/phone.svg';

const Contact = () => {
  return (
    <section id="contact">
      <h2>Contact Me</h2>
      <div className="contact-icons">
        <a href="https://github.com/Fatma-Ezz" target="_blank" rel="noopener noreferrer">
          <img src={githubIcon} alt="GitHub" className="icon" />
        </a>
        <a href="https://www.linkedin.com/in/fatmaahmed61" target="_blank" rel="noopener noreferrer">
          <img src={linkedinIcon} alt="LinkedIn" className="icon" />
        </a>
        <a href="mailto:Fatmaahmedezz@gmail.com">
          <img src={emailIcon} alt="Email" className="icon" />
        </a>
        <a href="tel:+01157126165">
          <img src={phoneIcon} alt="Phone" className="icon" />
        </a>
      </div>
    </section>
  );
}

export default Contact;
