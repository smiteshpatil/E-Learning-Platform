import { useState, useEffect } from "react";
import { getAllCourses } from "../../api/courseService";
import { courses as currentCourses } from "../../api/courseService";
import { CartProvider, useCart } from "react-use-cart";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Page = (props) => {
  const { addItem } = useCart();
  console.log("In page comp", props.courses);

  return (
    <>
      <div className="course-content-section">
        <div className="course-container">
          {currentCourses.map((currentCourse) => (
            <div className="course-post" key={currentCourse.id}>
              <img className="cover-img" src={currentCourse.thumbnail} alt="" />
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
              </div>
              <button className="btn btn-info">View Course</button>
              &nbsp;
              <button
                className="btn btn-success"
                onClick={() => addItem(currentCourse)}
              >
                Add to cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
function AppProducts() {
  const [allCourses, setAllCourses] = useState(null);

  //populate all courses
  useEffect(() => {
    const fetchData = async () => {
      try {
        const coursesPromise = getAllCourses(); // Calling the getAllCourses function
        toast.promise(coursesPromise, {
          pending: "Loading courses...",
          success: "Courses loaded",
          error: "Error fetching courses",
        });
        const courses = await coursesPromise;
        setAllCourses(courses);
      } catch (error) {
        console.error("Error fetching courses:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <CartProvider>
      <Page courses={allCourses} />
    </CartProvider>
  );
}
export default AppProducts;
