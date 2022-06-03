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
      let data = JSON.parse(localStorage.getItem("data"));

      setUser({
        name: data.data.name,
        email: data.data.email,
        password: data.data.password,
        id: data.data.id,
        address: data.data.address,
      });
    } else if (localStorage.getItem("data")) {
      const data = JSON.parse(localStorage.getItem("data"));
      setSignUp({
        userName: data.name,
      });
      console.log("checked");
    }
  }, []);

  return (
    <UserContext.Provider value={[user, setUser]} value1={[signUp, setSignUp]}>
      {props.children}
    </UserContext.Provider>
  );
};
