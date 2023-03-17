import React from "react";
import iconGithub from "../../../src/assets/github-w.svg";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <h4>
        Creado con 🤍 por
        <a
          href="https://natalia.net.ar/"
          className="footer__name"
          rel="noopener noreferrer"
        >
          {" "}
          Natalia Machella
        </a>
      </h4>
      <a
        href="https://github.com/nataliamachella"
        className="footer__logo"
        rel="noopener noreferrer"
      >
        <img src={iconGithub} alt="mi Github" width={24} />
      </a>
    </footer>
  );
};

export default Footer;
