import React from "react";
import classes from './About.module.css';
import github from '../Assets/github.svg';
import linkedin from '../Assets/linkedin.svg';

const About = React.forwardRef((props, ref) => {
  return  <main ref={ref} className={classes.container}>
    <div className={classes.offset}>about</div>

    <h1 className={classes.name}>Evans</h1>
    <span>5 Engr Joseph Israel str, off Ogombo Rd, off Lekki-epe express-way, Lagos. </span>
    <span>+234(0)8138836470. </span>
    <span className={classes.email}>evansaizik@gmail.com</span>
    <p>I am experienced in leveraging agile frameworks to provide robust frontend implementations for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition</p>

    <section className={classes.social}>
      <img src={github} alt="github link" />
      <img src={linkedin} alt="linkedin link" />
    </section>
  </main>
});

export default About;