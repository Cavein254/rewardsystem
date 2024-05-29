import React, { useState, useContext } from "react";

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (userData) => {
    setUser(userData);
  };

  const logOut = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logOut }}>
      {children}
    </AuthContext.Provider>
  );
};
