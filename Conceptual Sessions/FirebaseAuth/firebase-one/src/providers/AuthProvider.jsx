import { createContext, useState } from "react";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState([]);
  //register user with email and pass
  const createUser =()=>{
    
  }
  const authInfo = { user };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
