import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getAllCourses } from "../api/courseService";
import { downloadImage } from "../api/userService";
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
      const token = localStorage.getItem("token"); // Assuming token is declared properly

      // download user image
      let type = "";
      let userId = JSON.parse(storedUser).id;

      if (JSON.parse(storedUser).role === "ROLE_STUDENT") {
        type = "student";
      } else if (JSON.parse(storedUser).role === "ROLE_INSTRUCTOR") {
        type = "instructor";
      } else {
        type = "admin";
      }

      const fetchUserImage = async () => {
        try {
          const resp = await downloadImage(type, userId);
          if (resp) {
            // If image is downloaded successfully, update authUser with imageUrl
            setAuthUser((prevState) => ({
              ...prevState,
              imageUrl: resp,
            }));
          }
        } catch (error) {
          console.log(error);
        }
      };

      fetchUserImage(); // Call the function to download user image
      //

      console.log("In authContext: ", token);
    } else {
      console.log("No stored user found, navigating to login...");
      // navigate("/login");
    }
  }, [isLoggedIn, refresh, navigate]);

  useEffect(() => {
    const handleAfterReload = () => {
      try {
        setCart(localStorage.getItem("cart").split(","));
        console.log(
          "After Reload: cart=" +
            cart +
            " local=" +
            localStorage.getItem("cart")
        );
      } catch (error) {
        console.log(error);
      }
      // Logic to execute after the page is fully loaded (after a reload)
    };
    window.addEventListener("load", handleAfterReload);
    return () => {
      window.removeEventListener("load", handleAfterReload);
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
