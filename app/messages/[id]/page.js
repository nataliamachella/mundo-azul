import styles from "./chatRoom.module.css";
import {
  collection,
  addDoc,
  serverTimestamp,
  orderBy,
  limit,
  query,
} from "firebase/firestore";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { db, auth } from "../../../firebase/firebase";
import ChatMessage from "./chatMessage";
import InputChat from "./inputChat";
import Header from "../../../components/Header/Header";

const ChatRoom = ({ params }) => {
  const { id } = params;

  const messagesRef = collection(db, "messages");
  const q = query(messagesRef, orderBy("createdAt"), limit(25));

  const [messages] = useCollectionData(q, { idField: "id" });

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
      </main>
      <InputChat />
    </>
  );
};

export default ChatRoom;
