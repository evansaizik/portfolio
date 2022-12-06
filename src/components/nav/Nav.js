import React from "react";
import nav from './Nav.module.css';

const Nav = props => {
  const getId = event => props.onConfirm(event.target.id);

  return <div className={nav.a}>
    <p className={nav.a} onClick={getId} id='about'>ABOUT</p>
    <p className={nav.a} onClick={getId} id='education'>EDUCATION</p>
    <p className={nav.a} onClick={getId} id='skills'>SKILLS</p>
    <p className={nav.a} onClick={getId} id='experience'>EXPERIENCE</p>
    <p className={nav.a} onClick={getId} id='projects'>PROJECTS</p>
  </div>
};

export default Nav;