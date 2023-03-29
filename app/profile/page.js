"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import styles from "./profile.module.css";
import { useAuth } from "../../context/AuthContext";
import Header from "../../components/Header/Header";
import Button from "../../components/Button/Button";
import stylesButton from "../../components/Button/Button.module.css";
import heart from "../../public/assets/heart.png";
import avatar from "../../public/assets/avatar_user.png";
import edit from "../../public/assets/edit.png";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";

const Profile = () => {
  const { user, logout } = useAuth();
  const router = useRouter();

  const handleClick = async () => {
    await logout();

    Swal.fire({
      title: "Hasta pronto!",
      color: "blue",
      showConfirmButton: false,
      timer: 1500,
    });
    router.push("/");
  };

  return (
    <>
      <Header />
      <div className={styles.profile}>
        {user.photoURL ? (
          <Image
            src={user.photoURL}
            width={128}
            height={128}
            className={styles.photo}
            alt={user.displayName}
          />
        ) : (
          <Image src={avatar} width={128} height={128} alt={avatar} />
        )}

        <h1>{user.displayName || user.email}</h1>
        <button onClick={handleClick} className={styles.button}>
          Cerrar Sesión
        </button>
      </div>
      <div className={styles.buttons}>
        <Button
          style={stylesButton.btn_profile}
          text="mis publicaciones"
          img={edit}
        />
        <Button style={stylesButton.primary} text="mis favoritos" img={heart} />
      </div>
      <div>Acá van los post y/o favoritos</div>
    </>
  );
};

export default Profile;
