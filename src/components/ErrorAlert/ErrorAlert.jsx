import React from "react";
import "./ErrorAlert.css";
const ErrorAlert = ({ message }) => {
  return (
    <div className="error">
      <span>{message}</span>
    </div>
  );
};

export default ErrorAlert;
