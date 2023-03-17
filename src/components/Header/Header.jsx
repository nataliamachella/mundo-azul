import React from "react";
import "./Header.css";
import iconHome from "../../assets/Home.png";
import iconSearch from "../../assets/Search.png";
import iconMessage from "../../assets/Message.png";
import iconUser from "../../assets/User.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      {/* <h1>Mundo Azul</h1> */}
      <nav>
        <ul>
          <li>
            <Link to="/">
              <img src={iconHome} />
            </Link>
          </li>
          <li>
            <Link to="/dashboard">
              <img src={iconSearch} />
            </Link>
          </li>
          <li>
            <Link to="#">
              <img src={iconMessage} />
            </Link>
          </li>
          <li>
            <Link to="#">
              <img src={iconUser} />
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
