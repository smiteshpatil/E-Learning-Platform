import React, { useState, useContext, useEffect } from "react";
const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider(props) {
  const [authUser, setAuthUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [allCourses, setAllCourses] = useState([]);

  useEffect(() => {
    // const token = localStorage.getItem("token");
    const userDetails = localStorage.getItem("userObject");
    //set authUser with details
    console.log("AuthContext: In setUserContext ");
    setAuthUser(userDetails);
  }, []);

  const value = {
    authUser,
    setAuthUser,
    isLoggedIn,
    setIsLoggedIn,
    allCourses,
    setAllCourses,
  };
  return (
    <AuthContext.Provider value={value}>{props.children}</AuthContext.Provider>
  );
}
