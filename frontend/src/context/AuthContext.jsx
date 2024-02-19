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
  const [isLoading, setIsLoading] = useState(true);
  const [cart, setCart] = useState([]);
  let token = "";
  const navigate = useNavigate();

  // refresh context
  const refreshContext = () => {
    setRefresh((prev) => !prev);
  };

  // get authUser from localStorage
  useEffect(() => {
    const storedUser = localStorage.getItem("userObject");
    if (storedUser) {
      console.log("Stored user found:", storedUser);
      setAuthUser(JSON.parse(storedUser));
      setIsLoading(false);
      setIsLoggedIn(true);
      token = localStorage.getItem("token");
      console.log("In authCotext: ", token);
    } else {
      console.log("No stored user found, navigating to login...");
      // navigate("/login");
    }
  }, [isLoggedIn, refresh, navigate]);

  useEffect(() => {
    const handleAfterReload = () => {
      setCart(localStorage.getItem("cart").split(","));
      console.log("After Reload: cart="+cart+" local="+localStorage.getItem("cart"));
      // Logic to execute after the page is fully loaded (after a reload)
    };
    window.addEventListener('load', handleAfterReload);
    return () => {
      window.removeEventListener('load', handleAfterReload);
    };
  }, []);

  //fetch all Course
  useEffect(() => {
    const fetchCourses = async () => {
      const response = await getAllCourses();
      //console.log(response.data);
      setAllCourses(response.data);
      setIsLoading(false);
    };
    fetchCourses();
  }, []);

  const value = {
    authUser,
    setAuthUser,
    isLoggedIn,
    setIsLoggedIn,
    refreshContext,
    allCourses,
    setAllCourses,
    isLoading,
    cart,
    setCart,
  };
  return (
    <AuthContext.Provider value={value}>{props.children}</AuthContext.Provider>
  );
};
