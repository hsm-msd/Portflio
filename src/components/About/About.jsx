import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./About.module.css";

import { useTypewriter, Cursor } from "react-simple-typewriter";

export const About = () => {
  const [text] = useTypewriter({
    words: [
      "Hi there, Im Houssemeddine Msadok, I'm a software engineering student at Conestoga College [3.70 GPA] and seeking for Co-op. I like to solve and manage real world problems with coding.",
    ],
    loop: 1,
    typeSpeed: 20,
  });
  return (
    <div id="about">
      <div className={styles.About_container}>
        <h1>Tech Stack</h1>
        <div className={styles.About_icons}>
          <img src={getImageUrl("c++.png")} />
          <img src={getImageUrl("c_sharp.png")} />
          <img src={getImageUrl("c.png")} />
          <img src={getImageUrl("typescript.png")} />
          <img src={getImageUrl("js.png")} />
          <img src={getImageUrl("html.png")} />
          <img src={getImageUrl("css.png")} />
          <img src={getImageUrl("react.png")} />
          <img src={getImageUrl("vscode.png")} />
          <img src={getImageUrl("git.png")} />
          <img src={getImageUrl("nodejs.png")} />
          <img src={getImageUrl("visual_studio.png")} />
          <img src={getImageUrl("dotNet.png")} />
          <img src={getImageUrl("sql.png")} />
        </div>
      </div>

      <div id="window" className={styles.window}>
        <div id="title-bar" className={styles.title_bar}>
          <div id="dots" className={styles.dots}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <div id="window-body" className={styles.window_body}>
          <span>{text}</span>
          <span>
            <Cursor />
          </span>
        </div>
      </div>
    </div>
  );
};
