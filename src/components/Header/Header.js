import React, { useState } from "react";
import classes from './Header.module.css';
import menu from '../Assets/menu icon.png';
import Nav from "../nav/Nav";
import profile from '../Assets/IMG_3656.jpg';

const Header = props => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleDropMenu = () => {
    setShowMenu(val => !val)
  }

  return <>
    <div className={showMenu ? `${classes.dropmenu} ${classes.open}` : `${classes.dropmenu} ${classes.close}`}>
      <img className={classes.profilepix} src={profile} alt="displayphoto"/>
      <Nav id={props.id} />
    </div>
    <header className={classes.header}>
      <h1 className={classes.h1}>The Developer</h1>
      <img src={menu} alt="menu icon" onClick={toggleDropMenu} />
    </header>
  </>
};

export default Header;