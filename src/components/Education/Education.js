import React from "react";
import edStyles from './Education.module.css';

const Education = props  => {
  
  return <section className={edStyles.container}>
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
          <h4>ElectroHive research institute of technology</h4>
          <h5>frontend web development</h5>
        </div>
        <p>March 2020 - October 2020</p>
      </section>
    </main>
  </section>
};

export default Education;