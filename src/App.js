import React from "react";
import About from "./components/About/About";
import Header from "./components/Header/Header";
import style from './App.module.css';

function App() {
  return (
    <>
      <Header />
      <div className={style.page}>
        <About />
      </div>
    </>
  );
}

export default App;
