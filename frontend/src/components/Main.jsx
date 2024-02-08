import React from "react";
import { useState } from "react";
import bootstrap from "bootstrap/dist/css/bootstrap.min.css";
import Card from "./Card";
const Main = () => {
  const trendingCourses = [
    {
      id: 1,
      title: "React Crash Course",
      instructor: "John Doe",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 2,
      title: "Python for Begineers",
      instructor: "John Smith",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 3,
      title: "Web Development Bootcamp",
      instructor: "Alex Jonson",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 4,
      title: "Web Development Bootcamp",
      instructor: "Alex Jonson",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 5,
      title: "Web Development Bootcamp",
      instructor: "Alex Jonson",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 5,
      title: "Web Development Bootcamp",
      instructor: "Alex Jonson",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 5,
      title: "Web Development Bootcamp",
      instructor: "Alex Jonson",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 5,
      title: "Web Development Bootcamp",
      instructor: "Alex Jonson",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 5,
      title: "Web Development Bootcamp",
      instructor: "Alex Jonson",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 5,
      title: "Web Development Bootcamp",
      instructor: "Alex Jonson",
      image: "https://via.placeholder.com/150",
    },
  ];

  const [offset, setOffset] = useState(0);

  const nextSlide = () => {
    setOffset(offset + 1);
  };

  const prevSlide = () => {
    setOffset(offset - 1);
  };
  return (
    <div className="container">
      <h2 className="mt-3">Trending Courses</h2>
      <div className="d-flex justify-content-between align-items-center mb-3">
        <div className="d-flex align-items-center">
          <button className="btn btn-primary" onClick={prevSlide}>
            previous
          </button>
        </div>
        <div className="overflow-hidden" style={{ maxWidth: "100%" }}>
          <div className="d-flex">
            {trendingCourses.map((course, index) => (
              <div
                key={course.id}
                className={`mr-3 ${
                  index < offset || index >= offset + 3 ? "d-none" : ""
                }`}
              >
                <div className="card">
                  <img
                    className="card-img-top"
                    src={course.image}
                    alt={course.title}
                  />
                  <div className="card-body p-2">
                    <h6 className="card-title mb-0">{course.title}</h6>
                    <p className="card-text mb-0">
                      Instructor: {course.instructor}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="d-flex align-items-center">
          <button className="btn btn-primary" onClick={nextSlide}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Main;
