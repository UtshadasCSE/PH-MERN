import { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import auth from "../firebase/firebase.comfig";
import { PropTypes } from "prop-types";

export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  //   here we create user
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  //   here we logout user
  const logOut = () => {
    return signOut(auth);
  };
  //   here we login user
  const logIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  useEffect(() => {
    const unSubscibe = onAuthStateChanged(auth, (curruntUser) => {
      console.log("User in the auth state", curruntUser);
      setUser(curruntUser);
    });
    return () => {
      unSubscibe();
    };
  }, []);
  const authInfo = { user, createUser, logOut, logIn };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};
AuthProvider.propTypes = {
  children: PropTypes.node,
};
export default AuthProvider;
