import React from "react";
import { useAuth } from "../../context/AuthContext";
import styles from "./Greeting.module.css";
import { Englebert } from "@next/font/google";

const englebert = Englebert({ weight: "400", subsets: ["latin"] });

const Greeting = () => {
  const { user } = useAuth();
  return (
    <div className={`${styles.greeting} ${englebert.className}`}>
      Hola, {user.displayName || user.email} !
    </div>
  );
};

export default Greeting;
