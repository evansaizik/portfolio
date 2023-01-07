import React from "react";
import skillslayout from './Skills.module.css';
import markup from '../Assets/html5.svg';
import css from '../Assets/css.svg';
import js from '../Assets/js.svg';
import react from '../Assets/react.svg';
import redux from '../Assets/redux.svg';
import npm from '../Assets/npm.svg';

const Skills = React.forwardRef((props, ref) => {
  
  return <div ref={ref} className={skillslayout.container}>
    <p className={skillslayout.offset}>skill</p>
    <h2 className={skillslayout.title}>skills</h2>
    <h4>programming languages & tools</h4>
    <div className={skillslayout.skill}>
      <img className={skillslayout.skillset} src={markup} alt='skills' />
      <img className={skillslayout.skillset} src={css} alt='skills' />
      <img className={skillslayout.skillset} src={js} alt='skills' />
      <img className={skillslayout.skillset} src={react} alt='skills' />
      <img className={skillslayout.skillset} src={redux} alt='skills' />
      <img className={skillslayout.skillset} src={npm} alt='skills' />
    </div>
    <h4 className={skillslayout.work}>workflow</h4>
    <ul>
      <li>Mobile-fist, Responsive Design</li>
      <li>Cross Browser Testing & Debugging</li>
      <li>Cross Functional Teams</li>
      <li>Agile Development & Scrum</li>
    </ul>
  </div>
});

export default Skills;