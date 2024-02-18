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
  useEffect(() => {
    const storedUser = localStorage.getItem("userObject");
    if (storedUser) {
      syncCartWithUser(authUser);
    } else {
      localStorage.removeItem("cart");
      navigate("/login");
    }
  }, [isLoggedIn, authUser, navigate]);

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
  }, [isLoggedIn, refresh, navigate]);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await getAllCourses();
        console.log("Courses fetched:", response.data);
        setAllCourses(response.data);
      } catch (error) {
        console.error("Error fetching courses:", error); // Handle error (e.g., show error message)
      }
      setIsLoading(false);
    };
    fetchCourses();
  }, []);

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
