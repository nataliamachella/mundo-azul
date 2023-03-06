import React from "react";
import "./Dashboard.css";
import logo from "../../assets/Logo.svg";
import Button from "../../common/Button/Button";
import iconComunidad from "../../assets/comunidad.png";
import iconApple from "../../assets/apple.png";
import iconEdit from "../../assets/edit.png";
import iconHospital from "../../assets/hospital.png";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  return (
    <div className="dashboard">
      <img src={logo} className="logo" />
      <Button
        text="nosotros"
        img={iconEdit}
        style="secondary-btn"
        onClick={() => navigate("/nosotros")}
      />
      <Button
        text="recetas"
        img={iconApple}
        style="green-btn"
        onClick={() => navigate("/recetas")}
      />
      <Button
        text="comunidad"
        img={iconComunidad}
        style="primary-btn"
        onClick={() => navigate("/comunidad")}
      />
      <Button
        text="médicos"
        img={iconHospital}
        style="blue-btn"
        onClick={() => navigate("/medicos")}
      />
    </div>
  );
};

export default Dashboard;
