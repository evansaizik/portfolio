import React from "react";
import edStyles from './Education.module.css';

const Education = React.forwardRef((props,ref)  => {
  
  return <section ref={ref} className={edStyles.container}>
    <div className={edStyles.offset}>education</div>
    <h2 className={edStyles.title}>education</h2>
    <main className={edStyles.main}>
      <section>
        <div>
          <h4>university of benin</h4>
          <h5>bachelor of engineering</h5>
        </div>
        <p>September 2013 - November 2018</p>
      </section>
      <section>
        <div>
          <h4>Dufuna Technologies Limited</h4>
          <h5>frontend web development</h5>
        </div>
        <p>March 2022 - October 2022</p>
      </section>
    </main>
  </section>
});

export default Education;