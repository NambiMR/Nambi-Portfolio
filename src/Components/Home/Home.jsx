import React from 'react'
import './Home.css'

import IMG from '../../Assets/profile.png'

import { FaGithub  } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { IoMdMailUnread } from "react-icons/io";
import { RiWhatsappFill } from "react-icons/ri";

import { IoHome } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { GiSkills } from "react-icons/gi";
import { FaBriefcase } from "react-icons/fa";
import { MdPermContactCalendar } from "react-icons/md";
const Home = () => {
  const onButtonClick = () => {
    const pdfUrl = "Nambi Muthu Raja.pdf";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "Nambi Muthu Raja.pdf"; 
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
  return (
    <>
     <div className="home" id='home'>
      <div className="home-content">
        <h3>Hey, It's Me.👋</h3>
        <h1>Nambi Muthu Raja</h1>
        <h2>And I'm a <span>Frontend Developer</span></h2>
        <p>Passionate Front-End Developer with experience in creating responsive and dynamic web applications using React, HTML, CSS, and JavaScript. Dedicated to delivering seamless user experiences and innovative design solutions.</p>
        <div className="social-media">
          <li><a href='https://github.com/NambiMR'><FaGithub  /></a></li>
          <li><a href='https://www.linkedin.com/in/nambi25/'><CiLinkedin /></a></li>
          <li><a href="mailto:nambimr2004@example.com"><IoMdMailUnread  /></a></li>
          <li><a href='https://api.whatsapp.com/send?phone=6374618016'><RiWhatsappFill /></a></li>
        </div>
        <div className="button">
        <button onClick={onButtonClick} className="btn">Get My Resume</button>
          <button  className="btn"><a href="#contact">Hire Me</a></button>
        </div>
      </div>
      <div className="image">  
        <img src={IMG} alt='Portfolio-Image' />
      </div>
      <nav className='nav-icons'>
        <li><a className='active' href='#home'><IoHome /></a></li>
        <li><a href='#about'><CgProfile  /></a></li>
        <li><a href='#skills'><GiSkills  /></a></li>
        <li><a href='#portfolio'><FaBriefcase  /></a></li>
        <li><a href='#contact'><MdPermContactCalendar  /></a></li>
      </nav>
     </div>
    </>
  )
}

export default Home
