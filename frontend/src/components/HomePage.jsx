import React from "react";
import Carousel from "./Carousel";
import Main from "./Main";
import CategoryList from "./pages/CategoryList";
import MyLearning from "./student/MyLearning";
import { useAuth } from "../context/AuthContext";
const HomePage = () => {
  let { authUser } = useAuth();
  return (
    <div>
      <CategoryList />
      <Carousel />
      {authUser && <MyLearning />}
      <Main />
    </div>
  );
};

export default HomePage;
