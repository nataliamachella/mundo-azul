import React from "react";
import iconGithub from "../../public/assets/github-w.png";
import styles from "./Footer.module.css";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>
        Creado con 🤍 por
        <a
          href="https://natalia.net.ar/"
          className={styles.footer__name}
          rel="noopener noreferrer"
        >
          {" "}
          Natalia Machella
        </a>
      </p>
      <a
        href="https://github.com/nataliamachella"
        className={styles.footer__logo}
        rel="noopener noreferrer"
      >
        <Image
          src={iconGithub}
          alt="mi Github"
          width={22}
          className={styles.img}
        />
      </a>
    </footer>
  );
};

export default Footer;
