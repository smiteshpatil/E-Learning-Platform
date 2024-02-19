import React from "react";
import Carousel from "./Carousel";
import Main from "./Main";
import MyLearning from "./student/MyLearning";
import { useAuth } from "../context/AuthContext";
const HomePage = () => {
  let { isLoggedIn } = useAuth();
  return (
    <div>
      <Carousel />
      {isLoggedIn && <MyLearning />}
      <Main />
    </div>
  );
};

export default HomePage;
