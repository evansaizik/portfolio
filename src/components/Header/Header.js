import React, { useState } from "react";
import ReactDOM from 'react-dom';
import menu from '../Assets/menu icon.png';
import Nav from "../nav/Nav";
import Backdrop from "../UI/Backdrop";
import classes from './Header.module.css';
import profile from '../Assets/IMG_3656.jpg';

const Header = props => {
  const [showMenu, setShowMenu] = useState(false);
  const [showBackDrop, setShowBackDrop] = useState(false);

  const toggleDropMenu = () => {
    setShowBackDrop(val => !val);
    setShowMenu(val => !val);
  };

  const backdropHandler = () => {
    setShowBackDrop(false);
    setShowMenu(false);
  };
  
  return <>
    {showBackDrop && ReactDOM.createPortal(<Backdrop onClick={backdropHandler} />, document.getElementById('backdrop'))}
    <div className={showMenu ? `${classes.dropmenu} ${classes.open}` : `${classes.dropmenu} ${classes.close}`}>
      <img className={classes.profilepix} src={profile} alt="displayphoto"/>
      <Nav pageHandler={props.pageHandler} />
    </div>
    <header className={classes.header}>
      <h1 className={classes.h1}>The Developer</h1>
      <img src={menu} alt="menu icon" onClick={toggleDropMenu} />
    </header>
  </>
};

export default Header;