import React from "react";
import "./Button.css";

const Button = ({ text, style, img }) => {
  return (
    <div className="btn">
      <button className={style}>
        <img src={img} />
        {text}
      </button>
    </div>
  );
};

export default Button;
