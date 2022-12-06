import React, { useRef } from "react";
import About from "./components/About/About";
import Header from "./components/Header/Header";
import style from './App.module.css';
import Education from "./components/Education/Education";
import Skills from "./components/Skills/Skills";

function App() {
  const aboutRef = useRef()
  const educationRef = useRef()
  const skillsRef = useRef()
  const scrollToSection = id => {
    console.log(id);
    if (id === 'about') {
      window.scrollTo({top: aboutRef.current.offsetTop, behavior: 'smooth',})
    }
    if (id === 'education') {
      window.scrollTo({top: educationRef.current.offsetTop, behavior: 'smooth',})
    }
    if (id === 'skills') {
      window.scrollTo({top: skillsRef.current.offsetTop, behavior: 'smooth',})
    }
  };
  return (
    <>
      <Header onConfirm={scrollToSection} />
      <div className={style.page}>
        <About ref={aboutRef} />
        <Education ref={educationRef} />
        <Skills ref={skillsRef} />
      </div>
    </>
  );
}

export default App;
