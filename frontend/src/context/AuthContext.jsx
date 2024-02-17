import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
//import { getAllCourses } from "../api/courseService";

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

<<<<<<< HEAD
  // refresh context
  const refreshContext = () => {
    setRefresh((prev) => !prev);
  };

  //set userState
=======
  //
  useEffect(() => {
    const storedUser = localStorage.getItem("userObject");
    if (storedUser) {
      console.log(storedUser);
      setAuthUser(JSON.parse(storedUser));
      setAllCourses(JSON.parse(storedUser));
      syncCartWithUser(authUser);
    } else {
      localStorage.removeItem("userObject");
      localStorage.removeItem("token");
      localStorage.removeItem("cart");
      navigate("/login");
    }
  }, [ isLoggedIn ]);

  //set all courses in application level
<<<<<<< HEAD
  // useEffect(async () => {
  //  const response = await getAllCourses();
  //  setAllCourses(response.data);
  // }, []);
=======
>>>>>>> cc4f1cde513beb815f7160b1a7448815b9163231
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
>>>>>>> 99b44bce319d92fa29189ab4ba57d48a138c99f7

  const syncCartWithUser = (userData) => {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      // Update the user's cart with the cart data from local storage
      // You may need to implement merging logic if necessary
      // For simplicity, this example assumes the user's cart is overridden
      //userData.cart = JSON.parse(storedCart);
      localStorage.setItem('cart', storedCart);
      //localStorage.setItem('user', JSON.stringify(userData));
    }
  };
  const value = {
    authUser,
    setAuthUser,
    isLoggedIn,
    setIsLoggedIn,
<<<<<<< HEAD
    refreshContext,
=======
    allCourses,
    setAllCourses,
>>>>>>> cc4f1cde513beb815f7160b1a7448815b9163231
  };
  return (
    <AuthContext.Provider value={value}>{props.children}</AuthContext.Provider>
  );
};
