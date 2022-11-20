import React, { useEffect } from "react";
import About from "./components/About/About";
import Header from "./components/Header/Header";
import style from './App.module.css';
import Education from "./components/Education/Education";

function App() {
  
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth'})
  }, []);
  const topage = () => {
    let id;
    console.log(id);
    
    if (id === 'about') {
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth'})
    }
    window.scrollTo({ top: 1000, left: 0, behavior: 'smooth'})
  }

  return (
    <>
      <Header onClick={topage}/>
      <div className={style.page}>
        <About />
        <Education />
      </div>
    </>
  );
}

export default App;
