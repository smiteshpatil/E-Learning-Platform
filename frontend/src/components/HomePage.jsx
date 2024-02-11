import React from "react";
import Carousel from "./Carousel";
import Main from "./Main";
import CategoryList from "./pages/CategoryList";

const HomePage = () => {
  return (
    <div>
      <CategoryList />
      <Carousel />
      <Main />
    </div>
  );
};

export default HomePage;
