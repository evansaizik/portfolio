import React from "react";
import backdropstyles from './Backdrop.module.css';

const Backdrop = props => {
  return <div onClick={props.onClick} className={backdropstyles.backdrop}></div>
};

export default Backdrop;