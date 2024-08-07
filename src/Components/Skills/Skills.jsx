/* import React from 'react';
import './Skills.css';

// Skill icons
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaPython } from "react-icons/fa";

const Skills = () => {
  return (
    <div className="skills">
      <h2>My Skills</h2>
      <div className="skills-content">
        <div className="skill">
          <FaHtml5 className="skill-icon" />
          <h3>HTML5</h3>
        </div>
        <div className="skill">
          <FaCss3Alt className="skill-icon" />
          <h3>CSS3</h3>
        </div>
        <div className="skill">
          <FaJs className="skill-icon" />
          <h3>JavaScript</h3>
        </div>
        <div className="skill">
          <FaReact className="skill-icon" />
          <h3>React</h3>
        </div>
        <div className="skill">
          <FaPython className="skill-icon" />
          <h3>Python</h3>
        </div>
        <div className="skill">
          <FaPython className="skill-icon" />
          <h3>PHP</h3>
        </div>
        <div className="skill">
          <FaPython className="skill-icon" />
          <h3>MySQL</h3>
        </div>
        <div className="skill">
          <FaPython className="skill-icon" />
          <h3>MySQL</h3>
        </div>
        <div className="skill">
          <FaPython className="skill-icon" />
          <h3>MySQL</h3>
        </div>
      </div>
    </div>
  );
}

export default Skills;
 */
import React from 'react';
import './Skills.css';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaBootstrap ,FaPython,FaPhp,FaGitAlt,FaGithubSquare   } from "react-icons/fa";
import { SiMysql } from "react-icons/si";

const skills = [
  { name: 'HTML', icon: <FaHtml5  /> },
  { name: 'CSS', icon: <FaCss3Alt  /> },
  { name: 'JavaScript', icon: <FaJs  /> },
  { name: 'React', icon:<FaReact  />},
  { name: 'Bootstrap', icon: <FaBootstrap   /> },
  { name: 'Python', icon: <FaPython  /> },
  { name: 'PHP', icon:<FaPhp /> },
  { name: 'MySQL', icon: <SiMysql /> },
  { name: 'Git', icon: <FaGitAlt /> },
  { name: 'GitHub', icon: <FaGithubSquare  /> }
];

const Skills = () => {
  return (
    <div className="skills" id='skills'>
      <h2>My Skills</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div className="skill-card" key={index}>
            <div className="skill-icon">{skill.icon}</div>
            <h3>{skill.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
