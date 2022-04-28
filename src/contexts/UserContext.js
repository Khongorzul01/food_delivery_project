import { createContext, useState, useContext, useEffect } from "react";

export const UserContext = createContext({});

export function useUser() {
  return useContext(UserContext);
}

export const UserProvider = (props) => {
  const [user, setUser] = useState();
  const [signUp, setSignUp] = useState({});
  useEffect(() => {
    if (localStorage.getItem("data")) {
      const data = JSON.parse(localStorage.getItem("data"));
      setUser({
        name: data.name,
        email: data.email,
        password: data.password,
        id: data.id,
        address: data.address,
      });
    } else if (localStorage.getItem("data")) {
      const data = JSON.parse(localStorage.getItem("data"));
      setSignUp({
        userName: data.data,
      });
    }
  }, []);
  return (
    <UserContext.Provider value={[user, setUser]}>
      {props.children}
    </UserContext.Provider>
  );
};
