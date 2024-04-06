import { createContext, useState } from "react";
import { PropTypes } from "prop-types";
import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "./../Firebase/firebase.config";

export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const authInfo = { user, createUser };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node,
};
export default AuthProvider;
/*
1.CREATE  context and export it 
2.Set value with the provider
3.Use the AuthProvider in the main.jsx file
4.Access children in the AuthProvider as a Children
*/