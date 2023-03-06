import React from "react";
import "./Button.css";

const Button = ({ text, onClick, style, img }) => {
  return (
    <div className="btn">
      <button
        className={style}
        onClick={() => {
          onClick();
        }}
      >
        <img src={img} />
        {text}
      </button>
    </div>
  );
};

export default Button;
