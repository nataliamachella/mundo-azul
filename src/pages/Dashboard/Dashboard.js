import React from "react";
import "./Dashboard.css";

import Button from "../../components/Button/Button";
import iconComunidad from "../../assets/comunidad.png";
import iconApple from "../../assets/apple.png";
import iconEdit from "../../assets/edit.png";
import iconHospital from "../../assets/hospital.png";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/authContext";
import Header from "../../components/Header/Header";

const Dashboard = () => {
  const navigate = useNavigate();
  const { user } = useAuth();

  const onClickAboutMe = () => {
    navigate("/sobre-mi");
  };
  const onClickRecipes = () => {
    navigate("/recetas");
  };
  const onClickGroup = () => {
    navigate("/comunidad");
  };
  const onClickDoctors = () => {
    navigate("/medicos");
  };

  return (
    <div className="dashboard">
      <Header />
      <h3>Hola, {user.displayname || user.email}!</h3>
      <a href="/">Cerrar Sesión</a>

      <Button
        text="nosotros"
        img={iconEdit}
        style="secondary-btn"
        onClick={onClickAboutMe}
      />
      <Button
        text="recetas"
        img={iconApple}
        style="green-btn"
        onClick={onClickRecipes}
      />
      <Button
        text="comunidad"
        img={iconComunidad}
        style="primary-btn"
        onClick={onClickGroup}
      />
      <Button
        text="médicos"
        img={iconHospital}
        style="blue-btn"
        onClick={onClickDoctors}
      />
    </div>
  );
};

export default Dashboard;
