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
  const navigate = useNavigate();

  // refresh context
  const refreshContext = () => {
    setRefresh((prev) => !prev);
  };

  //set userState
  // useEffect(() => {
  //   const storedUser = localStorage.getItem("userObject");
  //   if (storedUser) {
  //     console.log(storedUser);
  //     setAuthUser(JSON.parse(storedUser));
  //     setAllCourses(JSON.parse(storedUser));
  //     syncCartWithUser(authUser);
  //   } else {
  //     localStorage.removeItem("userObject");
  //     localStorage.removeItem("token");
  //     localStorage.removeItem("cart");
  //     navigate("/login");
  //   }
  // }, [isLoggedIn]);

  //set all courses in application level
  // useEffect(async () => {
  //  const response = await getAllCourses();
  //  setAllCourses(response.data);
  // }, []);

  useEffect(() => {
    const storedUser = localStorage.getItem("userObject");
    if (storedUser) {
      console.log("Stored user found:", storedUser);
    } else {
      console.log("No stored user found, navigating to login...");
      // navigate("/login");
    }
  }, [isLoggedIn, refresh, navigate]);

  useEffect(() => {
    const fetchCourses = async () => {
      const response = await getAllCourses();
      console.log(response.data);
      setAllCourses(response.data);
      setIsLoading(false);
    };
    fetchCourses();
  }, []);

  // useEffect(() => {
  //   if (!isLoggedIn) {
  //     refreshContext();
  //   }
  // }, [isLoggedIn]);

  const syncCartWithUser = (userData) => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      // Update the user's cart with the cart data from local storage // You may need to implement merging logic if necessary
      // For simplicity, this example assumes the user's cart is overridden
      localStorage.setItem("cart", storedCart);
    }
  };
  const value = {
    authUser,
    setAuthUser,
    isLoggedIn,
    setIsLoggedIn,
    refreshContext,
    allCourses,
    setAllCourses,
    isLoading,
  };
  return (
    <AuthContext.Provider value={value}>{props.children}</AuthContext.Provider>
  );
};
