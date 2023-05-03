import Image from "next/image";
import { auth } from "../../../../firebase/firebase";
import styles from "./chatMessage.module.css";
import avatar from "../../public/assets/avatar_user_chat.png";

function ChatMessage(props) {
  const { text, uid, photoURL } = props.message;

  const messageClass =
    uid === auth.currentUser.uid ? styles.sent : styles.received;

  return (
    <>
      <div className={`${messageClass}`}>
        <Image
          src={photoURL || avatar}
          width={40}
          height={40}
          className={styles.img}
          alt="avatar"
          priority={true}
        />
        <p>{text}</p>
      </div>
    </>
  );
}

export default ChatMessage;
