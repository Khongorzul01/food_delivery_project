import { createContext, useState, useContext, useEffect } from "react";

export const UserContext = createContext({});

export function useUser() {
  return useContext(UserContext);
}

export const UserProvider = (props) => {
  const [user, setUser] = useState();
  const [signUpUsers, setSignUp] = useState({});
  console.log("sda");
  useEffect(() => {
    console.log("sda");
    if (localStorage.getItem("data")) {
      const data = JSON.parse(localStorage.getItem("data"));
      setUser({
        name: data.name,
        email: data.email,
        password: data.password,
        id: data.id,
        address: data.address,
      });
    }
  }, []);
  return (
    <UserContext.Provider value={[user, setUser]}>
      {props.children}
    </UserContext.Provider>
  );
};
