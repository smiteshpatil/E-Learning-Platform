import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getAllCourses } from "../api/courseService";

const AuthContext = React.createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = (props) => {
  const [authUser, setAuthUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [allCourses, setAllCourses] = useState([]);
  const navigate = useNavigate();

  //
  useEffect(() => {
    const storedUser = localStorage.getItem("userObject");
    if (storedUser) {
      console.log(storedUser);
      setAuthUser(JSON.parse(storedUser));
    } else {
      navigate("/login");
      localStorage.removeItem("userObject");
      localStorage.removeItem("token");
    }
  }, [isLoggedIn]);

  //set all courses in application level
  useEffect(() => {
    const storedUser = localStorage.getItem("userObject");
    if (storedUser) {
      console.log(storedUser);
      setAuthUser(JSON.parse(storedUser));
    } else {
      navigate("/login");
      localStorage.removeItem("userObject");
      localStorage.removeItem("token");
    }
    const fetchCourses = async () => {
      const response = await getAllCourses();
      setAllCourses(response.data);
    };
    fetchCourses();
  }, []);

  const value = {
    authUser,
    setAuthUser,
    isLoggedIn,
    setIsLoggedIn,
  };
  return (
    <AuthContext.Provider value={value}>{props.children}</AuthContext.Provider>
  );
};
