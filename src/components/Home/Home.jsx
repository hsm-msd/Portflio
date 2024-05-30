import React from "react";
import styles from "./Home.module.css";
import { IoMenu } from "react-icons/io5";
import { getImageUrl } from "../../utils";
import { FiGithub } from "react-icons/fi";
import { CiLinkedin } from "react-icons/ci";

export const Home = () => {
  return (
    <div id="home">
      <section className={styles.container}>
        <div className={styles.content}>
          <div className={styles.greeting}>
            <h1 className={styles.title}> Hi, I'm Houssem</h1>
            <span class={styles.hand}>👋</span>
          </div>
          <p className={styles.description}>
            I'm a 2nd year Software Engineering Student at Conestoga College🧑‍🎓
            <br />
            Passionate Full-stack developement. <br />
            I love to learn new things and to share my knowledge with
            others😊.
          </p>
          <div className={styles.Socialinks}>
            <a href="https://github.com/hsm-msd">
              <FiGithub />
            </a>
            <a href="http://www.linkedin.com/in/houssemeddine-msadok-8662b3294">
              <CiLinkedin />
            </a>
          </div>
        </div>
        <img src={getImageUrl("Me.jpg")} alt="Me" className={styles.Me} />
        <div className={styles.topBlur}></div>
        <div className={styles.bottomBlur}></div>
      </section>
    </div>
  );
};
