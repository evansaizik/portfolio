import React, { useEffect } from "react";
import About from "./components/About/About";
import Header from "./components/Header/Header";
import style from './App.module.css';
import Education from "./components/Education/Education";
import Skills from "./components/Skills/Skills";

function App() {
  
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth'})
  }, []);
  const toPageHandler = (id) => {
    if (id === 'about') window.scrollTo({ top: 0, left: 0, behavior: 'smooth'});
    
    if (id === 'education')
    window.scrollTo({ top: 500, left: 0, behavior: 'smooth'});

    if (id === 'skills')
    window.scrollTo({ top: 2000, left: 0, behavior: 'smooth'});

    if (id === 'experience')
    window.scrollTo({ top: 1000, left: 0, behavior: 'smooth'});

    if (id === 'projects')
    window.scrollTo({ top: 1000, left: 0, behavior: 'smooth'});
  }

  return (
    <>
      <Header pageHandler={toPageHandler}/>
      <div className={style.page}>
        <About />
        <Education />
        <Skills />
      </div>
    </>
  );
}

export default App;
