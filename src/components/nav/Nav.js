import React from "react";
import { NavLink } from "react-router-dom";
import nav from './Nav.module.css';

const Nav = props => {

  return <div>
    <NavLink to='/about'>ABOUT</NavLink>
    <NavLink to='/education'>EDUCATION</NavLink>
    <NavLink to='/skills'>SKILLS</NavLink>
    <NavLink to='/experience'>EXPERIENCE</NavLink>
    <NavLink to='/projects'>PROJECTS</NavLink>
  </div>
};

export default Nav;