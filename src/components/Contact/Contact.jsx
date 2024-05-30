import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import styles from "./Contact.module.css";
import { BiLogoGmail } from "react-icons/bi";
import { SiMicrosoftoutlook } from "react-icons/si";

export const Contact = () => {
  // const [showModal, setShowModal] = useState(false);
  // const form = useRef();
  // const [statusMessage, setStatusMessage] = useState(""); // Initialize status message
  // const [showStatus, setShowStatus] = useState(false);

  // const sendEmail = (e) => {
  //   e.preventDefault();

  //   emailjs
  //     .sendForm("service_sukd1ke", "template_y8dlqpe", form.current, {
  //       publicKey: "TdxAj9jovNq5_XFSo",
  //     })
  //     .then(
  //       (result) => {
  //         setStatusMessage("Email sent successfully");
  //         form.current.reset();
  //         setShowStatus(true); // Show the status message
  //         setTimeout(() => {
  //           setShowStatus(false); // Hide the status message after 10 seconds
  //         }, 10000);
  //       },
  //       (error) => {
  //         console.log("FAILED...", error.text);
  //         setStatusMessage(`${error.text} happened`);
  //       }
  //     );
  // };

  return (
    // <div id="contact">
    //   <div className={styles.contact_form}>
    //     <form ref={form} onSubmit={sendEmail} className={styles.contact}>
    //       <label>Name</label>
    //       <input type="text" name="from_name" required />
    //       <label>Email</label>
    //       <input type="email" name="from_email" required />
    //       <label>Message</label>
    //       <textarea name="message" required />
    //       <input type="submit" value="Send" />
    //     </form>
    //     {showStatus && <h2 className={styles.status}>{statusMessage}</h2>}
    //   </div>
    // </div>

    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <BiLogoGmail />
          <a href="mailto:houssemmsaddok654@gmail.com">
            houssemmsaddok654@gmail.com
          </a>
        </li>
        <li className={styles.link}>
          <SiMicrosoftoutlook />
          <a href="mailto:hmsadok1302@conestogac.on.ca">
            hmsadok1302@conestogac.on.ca
          </a>
        </li>
      </ul>
    </footer>
  );
};
