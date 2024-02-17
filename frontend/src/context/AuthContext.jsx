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
  const [allCourses, setAllCourses] = useState([]);
  const navigate = useNavigate();

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
    allCourses,
    setAllCourses,
  };
  return (
    <AuthContext.Provider value={value}>{props.children}</AuthContext.Provider>
  );
};
