import React from "react";
import About from "./components/About/About";
import Header from "./components/Header/Header";
import style from './App.module.css';
import Education from "./components/Education/Education";
import Skills from "./components/Skills/Skills";
import {Routes, Route} from 'react-router-dom'

function App() {
  return (
    <>
      <Header />
      <div className={style.page}>
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/education" element={<Education />} />
          <Route path="/skills" element={<Skills />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
