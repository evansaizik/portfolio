import { forwardRef } from 'react';
import classes from './Projects.module.css';
import news from '../Assets/news.png';
import meta from '../Assets/metabnb.png';

const Projects = forwardRef((props, ref) => {
  return <section className={classes.container} ref={ref}>
    <p className={classes.offset}>project</p>
    <h1 className={classes.title}>Projects</h1>
    <section className={classes.grid}>
      <div className={classes.project}>
        <div className={classes.img}>
          <img src={news} alt='news site photograph' />
        </div>
        <div>
          <h3>News Site</h3>
          <p>I built civilNews using React and Redux, the site gets its news data from an external API built with Python. Socer highlights are also fetched from an external API. </p>
        </div>
      </div>
      <div className={classes.project}>
        <div className={classes.img}>
          <img src={meta} alt='news site photograph' />
        </div>
        <div>
          <h3>metaBnb mockup</h3>
          <p>This is a responsive design to test my ability to work a UI designer to replicate pixel-perfect designs during my internship. </p>
        </div>
      </div>
    </section>
  </section>
});

export default Projects;