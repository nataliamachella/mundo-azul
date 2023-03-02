import React from "react";
import "./Button.css";

const Button = ({ text, onClick, style }) => {
  return (
    <div>
      <button
        className={style}
        onClick={() => {
          onClick();
        }}
      >
        {text}
      </button>
    </div>
  );
};

export default Button;
