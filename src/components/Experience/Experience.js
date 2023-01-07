import { forwardRef } from 'react';
import classes from './Experience.module.css';

const Experience = forwardRef((props, ref) => {
  return <section className={classes.container} ref={ref} >
    <p className={classes.offset}>experience</p>
    <h1 className={classes.title}>Experience</h1>
    <p>My current relevant experiences include internships and personal projects targetted to solidify my knowledge and understanding of the various concept and technologies of web development.
    </p>
  </section>
});

export default Experience;