import React from "react";
import Header from "../../components/Header/Header";
import Search from "./search/search";
import Chats from "./historyChats/historyChats";

const Messages = () => {
  return (
    <>
      <Header />
      <Search />
      <Chats />
    </>
  );
};

export default Messages;
