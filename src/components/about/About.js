import React from "react";
import classes from './About.module.css';
import github from '../Assets/github.svg';
import linkedin from '../Assets/linkedin.svg';

const About = () => {
  return  <main id="about" className={classes.container}>
    <h1 className={classes.name}>Evans</h1>
    <span>6 Akanbi Ogundare street, unity estate, iba, ojo, Lagos. </span>
    <span>+234(0)8138836470. </span>
    <span className={classes.email}>evansaizik@gmail.com</span>
    <p>I am experienced in leveraging agile frameworks to provide a robust frontend implementations for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition</p>

    <section className={classes.social}>
      <img src={github} alt="github link" />
      <img src={linkedin} alt="linkedin link" />
    </section>
  </main>
};

export default About;