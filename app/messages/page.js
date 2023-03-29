"use client";

import React, { useRef, useState } from "react";
import styles from "./messages.module.css";
import {
  collection,
  addDoc,
  serverTimestamp,
  orderBy,
  limit,
  query,
} from "firebase/firestore";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { db, auth } from "../../firebase/firebase";
import ChatMessage from "./chatMessage";
import button from "../../public/assets/button-send.png";
import Image from "next/image";
import Header from "../../components/Header/Header";

const ChatRoom = () => {
  const dummy = useRef();
  const messagesRef = collection(db, "messages");
  const q = query(messagesRef, orderBy("createdAt"), limit(25));

  const [messages] = useCollectionData(q, { idField: "id" });

  const [formValue, setFormValue] = useState("");

  const sendMessage = async (e) => {
    e.preventDefault();

    const { uid, photoURL } = auth.currentUser;
    try {
      const docRef = await addDoc(messagesRef, {
        text: formValue,
        createdAt: serverTimestamp(),
        uid,
        photoURL,
      });
      setFormValue("");
      dummy.current.scrollIntoView({ behavior: "smooth" });
      console.log("Document written with ID: ", docRef.id);
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };
  return (
    <>
      <Header />

      <h1 className={styles.h1}>Mensajes</h1>

      <main className={styles.main}>
        {messages &&
          messages.map((msg) => <ChatMessage key={msg.id} message={msg} />)}

        <span ref={dummy}></span>
      </main>

      <form onSubmit={sendMessage} className={styles.form}>
        <input
          value={formValue}
          onChange={(e) => setFormValue(e.target.value)}
          placeholder="Escribe aquí..."
        />

        <button type="submit">
          <Image src={button} alt="button-send" />
        </button>
      </form>
    </>
  );
};

export default ChatRoom;
