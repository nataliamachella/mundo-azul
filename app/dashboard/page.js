"use client";
import React from "react";
import styles from "./dashboard.module.css";
import stylesButton from "../../components/Button/Button.module.css";
import Button from "../../components/Button/Button";
import iconComunidad from "../../public/assets/comunidad.png";
import iconApple from "../../public/assets/apple.png";
import iconEdit from "../../public/assets/edit.png";
import iconHospital from "../../public/assets/hospital.png";
import { useRouter } from "next/navigation";
import Header from "../../components/Header/Header";
import logo from "../../public/assets/Logo-MundoAzul.png";
import Image from "next/image";
import { useAuth } from "../../context/AuthContext";
import Login from "../login/page";

const Dashboard = () => {
  const router = useRouter();
  const { user } = useAuth();

  const onClickAboutMe = () => {
    router.push("/about");
  };
  const onClickRecipes = () => {
    router.push("/recipes");
  };
  const onClickGroup = () => {
    router.push("/social");
  };
  const onClickDoctors = () => {
    router.push("/doctors");
  };

  return (
    <>
      {user ? (
        <div className={styles.dashboard}>
          <Header />
          {user && <h1>Hola, {user.displayName || user.email} ! </h1>}

          <Image
            src={logo}
            alt="logo Mundo Azul"
            priority="true"
            className={styles.img}
          />

          <Button
            text="nosotros"
            img={iconEdit}
            style={stylesButton.secondary}
            onClick={onClickAboutMe}
          />
          <Button
            text="recetas"
            img={iconApple}
            style={stylesButton.green}
            onClick={onClickRecipes}
          />
          <Button
            text="comunidad"
            img={iconComunidad}
            style={stylesButton.primary}
            onClick={onClickGroup}
          />
          <Button
            text="médicos"
            img={iconHospital}
            style={stylesButton.blue}
            onClick={onClickDoctors}
          />
        </div>
      ) : (
        <Login />
      )}
    </>
  );
};

export default Dashboard;
