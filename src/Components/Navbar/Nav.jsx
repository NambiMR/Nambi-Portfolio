import React, { useState } from 'react';
import './Nav.css';

const Nav = () => {
  const [active, setActive] = useState('#home');

  return (
    <div className="navbar">
      <h1>Portfolio.</h1>
      <nav className='links'>
        <a href='#home' aria-label="Home" className={active === '#home' ? 'active' : ''} onClick={() => setActive('#home')}>Home <span></span></a>
        <a href='#about' aria-label="About" className={active === '#about' ? 'active' : ''} onClick={() => setActive('#about')}>About <span></span></a>
        <a href='#skills' aria-label="Skills" className={active === '#skills' ? 'active' : ''} onClick={() => setActive('#skills')}>Skills <span></span></a>
        <a href='#portfolio' aria-label="Portfolio" className={active === '#portfolio' ? 'active' : ''} onClick={() => setActive('#portfolio')}>Portfolio <span></span></a>
        <a href='#contact' aria-label="Contact" className={active === '#contact' ? 'active' : ''} onClick={() => setActive('#contact')}>Contact <span></span></a>
      </nav>
    </div>
  );
}

export default Nav;
