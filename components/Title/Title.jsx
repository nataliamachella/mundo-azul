import React from "react";
import styles from "./Title.module.css";
import { Englebert } from "@next/font/google";

const englebert = Englebert({ weight: "400", subsets: ["latin"] });

const Title = ({ text }) => {
  return (
    <div className={englebert.className}>
      <h1 className={styles.title}>{text}</h1>
    </div>
  );
};

export default Title;
