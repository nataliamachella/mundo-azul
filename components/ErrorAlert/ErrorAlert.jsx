import React from "react";
import styles from "./ErrorAlert.module.css";

const ErrorAlert = ({ message }) => {
  return (
    <div className={styles.error}>
      <span>{message}</span>
    </div>
  );
};

export default ErrorAlert;
