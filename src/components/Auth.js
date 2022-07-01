import React, { createContext, useEffect, useState } from "react";

export const AuthProvider = createContext();

export const AuthState = ({ children }) => {
  const [currentUser, setCurrentUser] = useState([]);

  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem("data"));
    setCurrentUser(userInfo);
  }, []);

  return (
    <AuthProvider.Provider value={{ currentUser, setCurrentUser }}>
      {children}
    </AuthProvider.Provider>
  );
};
