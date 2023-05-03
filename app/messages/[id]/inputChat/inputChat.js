"use client";

import React, { useRef, useState } from "react";
import button from "../../public/assets/button-send.png";
import Image from "next/image";

const InputChat = () => {
  const [formValue, setFormValue] = useState("");

  return (
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
  );
};

export default InputChat;
