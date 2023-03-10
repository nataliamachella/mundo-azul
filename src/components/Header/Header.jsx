import React from "react";
import "./Header.css";
import iconHome from "../../assets/Home.png";
import iconSearch from "../../assets/Search.png";
import iconMessage from "../../assets/Message.png";
import iconUser from "../../assets/User.png";

const Header = () => {
  return (
    <div className="header">
      <h1>Mundo Azul</h1>
      <nav>
        <ul>
          <li>
            <a href="/">
              <img src={iconHome} />
            </a>
          </li>
          <li>
            <a href="#">
              <img src={iconSearch} />
            </a>
          </li>
          <li>
            <a href="#">
              <img src={iconMessage} />
            </a>
          </li>
          <li>
            <a href="#">
              <img src={iconUser} />
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
