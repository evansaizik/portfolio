import React from "react";
import nav from './Nav.module.css';

const Nav = props => {
  return <>
    <a href="/about" className={nav.link}>ABOUT</a>
    <a href="/education" className={nav.link}>EDUCATION</a>
    <a href="/skills" className={nav.link}>SKILLS</a>
    <a href="/experience" className={nav.link}>EXPERIENCE</a>
    <a href="/projects" className={nav.link}>PROJECTS</a>
  </>
};

export default Nav;