import React from "react";
import styles from "./Header.module.css";
import iconHome from "../../public/assets/Home.png";
import iconSearch from "../../public/assets/Search.png";
import iconMessage from "../../public/assets/Message.png";
import iconUser from "../../public/assets/User.png";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  return (
    <div className={styles.header}>
      <nav>
        <ul>
          <li>
            <Link href="/">
              <Image src={iconHome} alt="icono-Home" />
            </Link>
          </li>
          <li>
            <Link href="/dashboard">
              <Image src={iconSearch} alt="icono-Search" />
            </Link>
          </li>
          <li>
            <Link href="/">
              <Image src={iconMessage} alt="icono-Message" />
            </Link>
          </li>
          <li>
            <Link href="/">
              <Image src={iconUser} alt="icono-User" />
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
