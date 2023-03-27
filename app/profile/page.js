"use client";
import Image from "next/image";
import React from "react";
import styles from "./profile.module.css";
import { useAuth } from "../../context/AuthContext";
import Header from "../../components/Header/Header";

const Profile = () => {
  const { user } = useAuth();
  return (
    <>
      <Header />
      <div className={styles.profile}>
        <Image
          src={user.photoURL}
          width={128}
          height={128}
          className={styles.photo}
          alt={user.displayName}
        />
        <h1>{user.displayName}</h1>
      </div>
      <div>
        <button className={styles.button}></button>
        <Button />
      </div>
    </>
  );
};

export default Profile;
