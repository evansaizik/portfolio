import React from "react";
import nav from './Nav.module.css';

const Nav = props => {
  const getId = (event) => {
    props.pageHandler(event.target.id);
  };

  return <div onClick={getId}>
    <p id='about' className={nav.link}>ABOUT</p>
    <p id='education' className={nav.link}>EDUCATION</p>
    <p id="skills" className={nav.link}>SKILLS</p>
    <p id="experience" className={nav.link}>EXPERIENCE</p>
    <p id="projects" className={nav.link}>PROJECTS</p>
  </div>
};

export default Nav;