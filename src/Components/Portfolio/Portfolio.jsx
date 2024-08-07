import React from 'react';
import './Portfolio.css';

// Example project images
import Project1 from '../../Assets/nc.png';
import Project2 from '../../Assets/weather.JPG';
import Project3 from '../../Assets/eplantshop.JPG';

const Portfolio = () => {
  return (
    <div className="portfolio" id='portfolio'>
      <h2>My Portfolio</h2>
      <div className="portfolio-content">
        <div className="project">
          <img src={Project1} alt="Project 1" />
          <h3>Construction Desining</h3>
          <p>A responsive website for Naachiyar Construction featuring an About Us section, Services section, and Contact Us form. Designed to showcase company information and services with a clean, user-friendly interface.</p>
          <div className="project-links">
            <a href="https://naachiyarconstruction.netlify.app/">View Project</a>
            <a href="https://github.com/NambiMR/NC.git">View Code</a>
          </div>
        </div>
        <div className="project">
          <img src={Project2} alt="Project 2" />
          <h3>Weather App</h3>
          <p>A responsive weather application using HTML, CSS, and JavaScript. Enter a city name to retrieve weather information like temperature, description, humidity, and wind speed from the OpenWeatherMap API. Includes a 5-day weather forecast.</p>
          <div className="project-links">
            <a href="https://jsweathermonitor.netlify.app">View Project</a>
            <a href="https://github.com/NambiMR/js-weather-monitoring.git">View Code</a>
          </div>
        </div>
        <div className="project">
          <img src={Project3} alt="Project 3" />
          <h3>e-Plant Shopping</h3>
          <p>A user-friendly e-commerce application for browsing and purchasing houseplants. Features include a landing page,a product listing page showcasing various plants, and a shopping cart for managing items and checkout. Built with React.</p>
          <div className="project-links">
            <a href="nambimr.github.io/e-plantShopping/">View Project</a>
            <a href="https://github.com/NambiMR/e-plantShopping.git">View Code</a>
          </div>
        </div>
        {/* <div className="project">
          <img src={Project3} alt="Project 3" />
          <h3>Conference Event Planner</h3>
          <p>A user-friendly e-commerce application for browsing and purchasing houseplants. Features include a landing page,a product listing page showcasing various plants, and a shopping cart for managing items and checkout. Built with React.</p>
          <div className="project-links">
            <a href="nambimr.github.io/e-plantShopping/">View Project</a>
            <a href="https://github.com/NambiMR/e-plantShopping.git">View Code</a>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default Portfolio;
