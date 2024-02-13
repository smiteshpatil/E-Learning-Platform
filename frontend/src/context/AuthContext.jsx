import React, { useState, useContext, useEffect } from "react";
import { jwtDecode } from "jwt-decode";
const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider(props) {
  const [authUser, setAuthUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [allCourses, setAllCourses] = useState([]);

  useEffect(() => {
    //check if token exists in localStorage
    const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);
      //set authUser with details
      const decodedToken = jwtDecode(token);
      console.log("In setUserContext ", decodedToken);
      setAuthUser({
        firstName: decodedToken.firstName,
        lastName: decodedToken.lastName,
        picture: decodedToken.picture,
        email: decodedToken.email,
      });
    }
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
