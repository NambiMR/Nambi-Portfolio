import React from 'react';
import './About.css';

// Image
import ProfilePic from '../../Assets/about.jpeg';

const About = () => {
  return (
    <div className="about" id='about'>
      <div className="about-content">
        <h2>About Me</h2>
        <p>
        I'm Nambi Muthu Raja, a front-end developer from Tamil Nadu, India, with a Bachelor of Science in Information Technology. My expertise lies in creating dynamic and responsive web applications using React, JavaScript, HTML, and CSS. I've developed various projects, from simple calculators to complex e-commerce platforms, and am passionate about crafting user-friendly digital experiences.
        </p>
        <p>With hands-on experience from internships and personal projects, I've refined my skills in web development and project management. I enjoy staying current with the latest tech trends and am always excited to take on new challenges. Feel free to explore my portfolio and reach out if you’d like to collaborate or discuss potential opportunities!</p>
      </div>
      <div className="about-image">
        <img src={ProfilePic} alt="Nambi Muthu Raja" />
      </div>
    </div>
  );
}

export default About;
