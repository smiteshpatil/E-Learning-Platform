import React, { useState, useEffect } from "react";

import ReactPaginate from "react-paginate";
import "../css/Main.css";

import thumbnail from "../images/card1.jpg";

const Main = () => {
  const [trendingCourses, setTrendingCourses] = useState([]);
  const [currentCourse, setcurrentCourse] = useState(1);
  const [coursesPerPage] = useState(3);

  //populated courses
  const courses = [
    {
      id: 1,
      thumbnail: thumbnail,
      title: "Web Development",
      description:
        "Web development course by smitesh patil. Learn from the best of the bestLearn from the best of the best Learn from the best of the best Learn from the best of the best.",
      author: {
        profilePicture: {
          url: thumbnail,
        },
      },
      datePublished: "Mar 15, 2024",
      courseUrl: "https://google.com",
    },
    {
      id: 2,
      thumbnail: thumbnail,
      title: "JavaScript",
      description:
        "Javascript course by smitesh patil. Learn from the best of the best Learn from the best of the best Learn from the best of the best.",
      author: {
        profilePicture: {
          url: thumbnail,
        },
      },
      datePublished: "Mar 15, 2024",
      courseUrl: "https://google.com",
    },
    {
      id: 3,
      thumbnail: thumbnail,
      title: "jQuery",
      description:
        "jQuery course by smitesh patil. Learn from the best of the best Learn from the best of the best Learn from the best of the best.",
      author: {
        profilePicture: {
          url: thumbnail,
        },
      },
      datePublished: "Mar 15, 2024",
      courseUrl: "https://google.com",
    },
    {
      id: 4,
      thumbnail: thumbnail,
      title: "HTML5",
      description:
        "HTML5 course by smitesh patil. Learn from the best of the best Learn from the best of the best Learn from the best of the best.",
      author: {
        profilePicture: {
          url: thumbnail,
        },
      },
      datePublished: "Mar 15, 2024",
      courseUrl: "https://google.com",
    },
    {
      id: 5,
      thumbnail: thumbnail,
      title: "Bootstrap",
      description:
        "Bootstrap course by smitesh patil. Learn from the best of the best Learn from the best of the best Learn from the best of the best.",
      author: {
        profilePicture: {
          url: thumbnail,
        },
      },
      datePublished: "Mar 15, 2024",
      courseUrl: "https://google.com",
    },
    {
      id: 6,
      thumbnail: thumbnail,
      title: "React",
      description: "React course by smitesh patil",
      author: {
        profilePicture: {
          url: thumbnail,
        },
      },
      datePublished: "Mar 15, 2024",
      courseUrl: "https://google.com",
    },
  ];

  useEffect(() => {
    const fetchTrendingCourses = async () => {
      setTrendingCourses(courses);
    };

    fetchTrendingCourses();
  }, []);

  const indexOfLastCourse = currentCourse * coursesPerPage;
  const indexOfFirstCourse = indexOfLastCourse - coursesPerPage;
  const currentCourses = trendingCourses.slice(
    indexOfFirstCourse,
    indexOfLastCourse
  );

  const paginate = ({ selected }) => {
    setcurrentCourse(selected + 1);
  };

  return (
    <div className="container">
      <div className="title">
        <h1>Trending Courses</h1>
      </div>
      {trendingCourses ? (
        <div className="blog-content-section">
          <div className="blog-container">
            {currentCourses.map((currentCourse) => (
              <div className="blog-post" key={currentCourse.id}>
                <img
                  className="cover-img"
                  src={currentCourse.thumbnail}
                  alt=""
                />
                <h2 className="title">{currentCourse.title}</h2>

                <p className="description">{currentCourse.description}</p>
                <div className="card-details">
                  <div className="lh-details">
                    <img
                      className="author-img"
                      src={currentCourse.author.profilePicture.url}
                      alt=""
                    />
                    <p className="date">
                      {new Date(
                        `${currentCourse.datePublished}`
                      ).toLocaleDateString("en-us", {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </p>
                  </div>
                  <a
                    href={currentCourse.courseUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="read-more"
                  >
                    View Course
                  </a>
                </div>
              </div>
            ))}
          </div>
          <ReactPaginate
            onPageChange={paginate}
            pageCount={Math.ceil(trendingCourses.length / coursesPerPage)}
            previousLabel={"Prev"}
            nextLabel={"Next"}
            containerClassName={"pagination"}
            pageLinkClassName={"page-number"}
            previousLinkClassName={"page-number"}
            nextLinkClassName={"page-number"}
            activeLinkClassName={"active"}
          />
        </div>
      ) : (
        <div className="loading">Loading...</div>
      )}
    </div>
  );
};

export default Main;
