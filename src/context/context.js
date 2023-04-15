import React, { createContext, useState } from 'react';
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";


export const Context = createContext();

const ContextProvider= (props) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user,setUser] = useState({
    email: "",
    password: ""
  });

  const login = () => {
    // Kullanıcı oturum açma işlemleri gerçekleştirilir ve isAuthenticated true olarak ayarlanır.
    setIsAuthenticated(true);
  };

  const logout = () => {
    // Kullanıcı oturum kapatma işlemleri gerçekleştirilir ve isAuthenticated false olarak ayarlanır.
    setIsAuthenticated(false);
  };

  const signup = async (email, password) => {
    try {
      const userCredantial = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredantial.user;
      console.log("User created", user);
      if (user !== null) {
        // The user object has basic properties such as display name, email, etc.
        const displayName = user.displayName;
        const email = user.email;
        const photoURL = user.photoURL;
        const emailVerified = user.emailVerified;
        const uid = user.uid;

        setUser(user);
        setIsLoggedIn(true);
      }
    } catch (error) {
      var errorCode = error.code;
      var errorMessage = error.message;

      if (errorCode === "auth/email-already-in-use") {
        alert("Email already in use");
      } else if (errorCode === " ") {
        alert("User not found");
      } else {
        alert(errorMessage);
      }
    }
  };

  return (
    <Context.Provider value={{ isAuthenticated, login, logout, signup, user }}>
      {props.children}
    </Context.Provider>
  );
};

export default ContextProvider;
