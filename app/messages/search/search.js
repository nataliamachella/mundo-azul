"use client";

import React, { useState } from "react";
import styles from "./search.module.css";
import {
  collection,
  query,
  where,
  getDocs,
  setDoc,
  doc,
  updateDoc,
  serverTimestamp,
  getDoc,
} from "firebase/firestore";
import { db } from "../../../firebase/firebase";
import { useAuth } from "../../../context/AuthContext";
import ErrorAlert from "../../../components/ErrorAlert/ErrorAlert";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Search = () => {
  const [username, setUsername] = useState("");
  const [dataInput, setDataInput] = useState(null);
  const [error, setError] = useState("");

  const { user } = useAuth();

  const router = useRouter();

  const handleSearch = async () => {
    const q = query(
      collection(db, "users"),
      where("displayName", "==", username)
    );

    try {
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        setDataInput(doc.data());
      });
    } catch (error) {
      setError(error);
    }
  };

  const handleKey = (e) => {
    e.code === "Enter" && handleSearch();
  };

  const handleSelect = async () => {
    //check whether the group(messages in firestore) exists, if not create
    const combinedId =
      user.uid > dataInput.uid
        ? user.uid + dataInput.uid
        : dataInput.uid + user.uid;
    try {
      const res = await getDoc(doc(db, "usermMessages", combinedId));

      if (!res.exists()) {
        //create a chat in messages collection
        await setDoc(doc(db, "userMessages", combinedId), { messages: [] });

        //create dataInput messages
        await updateDoc(doc(db, "messages", user.uid), {
          [combinedId + ".userInfo"]: {
            uid: dataInput.uid,
            displayName: dataInput.displayName,
            photoURL: dataInput.photoURL,
          },
          [combinedId + ".date"]: serverTimestamp(),
        });

        await updateDoc(doc(db, "messages", dataInput.uid), {
          [combinedId + ".userInfo"]: {
            uid: user.uid,
            displayName: user.displayName,
            photoURL: user.photoURL,
          },
          [combinedId + ".date"]: serverTimestamp(),
        });
      }
    } catch (error) {
      setError(error);
    }

    setDataInput(null);
    setUsername("");

    router(`/${id}`);
  };
  return (
    <>
      <div className={styles.messages}>
        <div className={styles.form}>
          <input
            type="text"
            placeholder="Buscar a un usuario..."
            onKeyDown={handleKey}
            onChange={(e) => setUsername(e.target.value)}
            value={username}
            className={styles.input}
          />
        </div>
        {error && <ErrorAlert message={error} />}
        {dataInput && (
          <div className={styles.userMessage} onClick={handleSelect}>
            <Image
              src={dataInput.photoURL}
              alt="user photo"
              className={styles.img}
              width={50}
              height={50}
            />
            <div className={styles.userMessageInfo}>
              <span>{dataInput.displayName}</span>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Search;
