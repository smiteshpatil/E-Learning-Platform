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
  const [refresh, setRefresh] = useState(false);
  const [allCourses, setAllCourses] = useState([]);
  const navigate = useNavigate();

  // refresh context
  const refreshContext = () => {
    setRefresh((prev) => !prev);
  };

  //set userState
  useEffect(() => {
    const storedUser = localStorage.getItem("userObject");
    if (storedUser) {
      console.log("Stored user found:", storedUser);
      setAuthUser(JSON.parse(storedUser));
    } else {
      console.log("No stored user found, navigating to login...");
      navigate("/login");
      localStorage.removeItem("userObject");
      localStorage.removeItem("token");
    }
  }, [isLoggedIn, refresh]); // Consider adding authUser to dependency array if needed

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await getAllCourses();
        setAllCourses(response.data);
        console.log("Courses fetched:", response.data);
      } catch (error) {
        console.error("Error fetching courses:", error);
        // Handle error (e.g., show error message)
      }
    };
    fetchCourses();
  }, []);

  const value = {
    authUser,
    setAuthUser,
    isLoggedIn,
    setIsLoggedIn,
    refreshContext,
  };
  return (
    <AuthContext.Provider value={value}>{props.children}</AuthContext.Provider>
  );
};
