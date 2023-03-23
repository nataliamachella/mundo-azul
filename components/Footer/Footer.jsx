import React from "react";
import iconGithub from "../../public/assets/github-w.png";
import styles from "./Footer.module.css";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <h4>
        Creado con 🤍 por
        <a
          href="https://natalia.net.ar/"
          className={styles.footer__name}
          rel="noopener noreferrer"
        >
          {" "}
          Natalia Machella
        </a>
      </h4>
      <a
        href="https://github.com/nataliamachella"
        className={styles.footer__logo}
        rel="noopener noreferrer"
      >
        <Image src={iconGithub} alt="mi Github" width={24} />
      </a>
    </footer>
  );
};

export default Footer;
