import Image from "next/image";
import React from "react";
import styles from "./Button.module.css";

const Button = ({ text, style, img, onClick }) => {
  return (
    <div className={styles.btn}>
      <button className={style} onClick={() => onClick()}>
        <Image src={img} alt="icon" />
        {text}
      </button>
    </div>
  );
};

export default Button;
