import { forwardRef } from "react";
import classes from "./Experience.module.css";

const Experience = forwardRef((props, ref) => {
  return (
    <section className={classes.container} ref={ref}>
      <div className={classes.offset}>Experience</div>

      <h2 className={classes.title}>Experience</h2>
      <main className={classes.main}>
        <section>
          <div>
            <h4>dufuna technologies limited</h4>
            <h5>frontend developer (react)</h5>
          </div>
          <p>November 2020 - present</p>
          <div className={classes.item}>
            <p>
              Optimised websites to improve backward and cross-browser
              compatibility
            </p>
            <p>
              Addressed concerns quickly to avoid lasting issues through
              debugging
            </p>
            <p>Built the doctor and patient page for One2One health app</p>
            <p>
              Optimised websiteds to improve backward and cross-browser
              compatibility
            </p>
          </div>
        </section>
        <section>
          <div>
            <h4>Electrohyve Research Institute of Technology</h4>
            <h5>frontend web development (Intern)</h5>
          </div>
          <p>March 2017 - October 2017</p>
          <div className={classes.item}>
            <p>
              Designing responsive pages for the login page of the BEDC graduate
              trainee app that was used for their training program.
            </p>
            <p>
              Enhanced my skill by working with a team of developers, debugging
              and giving feedback to the team lead pertaining tasks' progress
              and difficulties.
            </p>
          </div>
        </section>
      </main>
    </section>
  );
});

export default Experience;
