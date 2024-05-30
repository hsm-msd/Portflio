import { useState } from "react";
import styles from "./App.module.css";
import { NavBar } from "./components/NavBar/NavBar";
import { Home } from "./components/Home/Home";
import { About } from "./components/About/About";
import { Projects } from "./components/Projects/Projects";
import { Contact } from "./components/Contact/Contact";

function App() {
  return (
    <div className={styles.App}>
      <NavBar />
      <Home />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
