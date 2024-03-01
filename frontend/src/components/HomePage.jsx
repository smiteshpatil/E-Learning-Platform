import React from "react";
import Carousel from "./Carousel";
import Main from "./Main";
import MyLearning from "./student/MyLearning";
import { useAuth } from "../context/AuthContext";
import CategoryList from "./pages/CategoryList";
const HomePage = () => {
  let { isLoggedIn, authUser } = useAuth();
  return (
    <div>
      <CategoryList />
      <Carousel />
      {isLoggedIn && authUser.role == "ROLE_STUDENT" && <MyLearning />}
      <Main />
    </div>
  );
};

export default HomePage;
