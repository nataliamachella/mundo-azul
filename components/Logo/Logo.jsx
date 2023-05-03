import React from "react";
import Image from "next/image";
import logoMundoAzul from "../../public/assets/Logo.svg";
import styles from "./Logo.module.css";

const Logo = () => {
  return (
    <div>
      {" "}
      <Image
        src={logoMundoAzul}
        alt="logo de Mundo Azul"
        className={styles.logo}
      />
    </div>
  );
};

export default Logo;
