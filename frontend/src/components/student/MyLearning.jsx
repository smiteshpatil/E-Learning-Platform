import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import MyCourse from "./MyCourse";

const MyLearning = () => {
  return (
    <div className="container-fluid my-3">
      <h1>My Courses</h1>
      <div className="row">
        <div className="col col-md-3 col-sm-6">
          <MyCourse
            courseName={"React Developer"}
            progress={50}
            imageUrl={
              "https://www.dropbox.com/scl/fi/eqi93k54ejkxat2g8e4vz/coursePoster.png?rlkey=hiaw1cetvdcyl1wku1tchst7g&raw=1"
            }
          />
        </div>
        <div className="col col-md-3 col-sm-6">
          <MyCourse
            courseName={"React Developer"}
            progress={50}
            imageUrl={
              "https://www.dropbox.com/scl/fi/0158j9jscpclhmlioxf8d/images.png?rlkey=ktk8sijpavw3qjj9k89np1n35&raw=1"
            }
          />
        </div>
      </div>
    </div>
  );
};

export default MyLearning;
