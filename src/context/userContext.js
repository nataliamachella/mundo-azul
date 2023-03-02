import { createContext, useState } from "react";

export const UserContext = createContext({});

const UserContextProvider = ({ children }) => {
  const [form, setForm] = useState({
    name: "",
    lastname: "",
    email: "",
    password: "",
    isLogin: false,
  });

  return (
    <UserContext.Provider value={{ form, setForm }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
