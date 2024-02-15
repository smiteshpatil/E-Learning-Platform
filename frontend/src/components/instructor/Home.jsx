import React from "react";
import {
  BsFillArchiveFill,
  BsFillGrid3X3GapFill,
  BsPeopleFill,
  BsFillBellFill,
} from "react-icons/bs";

const Home = () => {
  return (
    <main className="main-container">
      <div className="main-title"></div>

      <div className="main-cards">
        <div className="card-outer">
          <div className="card-inner">
            <h3>Courses</h3>
            <BsFillArchiveFill className="card_icon" />
          </div>
          <h1>25</h1>
        </div>
        <div className="card-outer">
          <div className="card-inner">
            <h3>Categories</h3>
            <BsFillGrid3X3GapFill className="card_icon" />
          </div>
          <h1>12</h1>
        </div>
        <div className="card-outer">
          <div className="card-inner">
            <h3>Students</h3>
            <BsPeopleFill className="card_icon" />
          </div>
          <h1>33</h1>
        </div>
        <div className="card-outer">
          <div className="card-inner">
            <h3>Questions</h3>
            <BsFillBellFill className="card_icon" />
          </div>
          <h1>42</h1>
        </div>
      </div>
    </main>
  );
};

export default Home;
