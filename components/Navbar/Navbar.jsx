"use client";
import React from "react";
import Search from "../Search/Search";
import Image from "next/image";
import iconHospital from "../../public/assets/hospital.png";
import iconProfessional from "../../public/assets/professional.png";
import styles from "./Navbar.module.css";

function Navbar({ title }) {
  return (
    <div className={styles.navbar}>
      <h1>{title}</h1>
      <Search />
      <div className={styles.icons}>
        <div className={styles.icon}>
          <Image
            src={iconProfessional}
            alt="icono Profesionales"
            width={32}
            height={32}
          />
        </div>
        <div className={styles.icon}>
          <Image
            src={iconHospital}
            alt="icono Hospital"
            width={32}
            height={32}
          />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
