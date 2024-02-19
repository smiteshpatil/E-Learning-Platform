import { useState, useEffect } from "react";
//import { CartProvider, useCart } from "react-use-cart";
import { toast } from "react-toastify";
import { useAuth } from "../../context/AuthContext";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
const Page = (props) => {
  const { setCart, allCourses } = useAuth();
  function handleAddToCart(id){
    console.log("ID: "+id);
    setCart(prevState => ([...prevState, id]));
  }
  //const { addItem } = useCart();
  console.log("In page comp", props.courses);
  // const courseDTO = allCourses.map((each) => each.courseDTO);
  // const instructorDTO = allCourses.map((curr)=>curr.instructorDTO)
  return (
    <>
      <div className="container course-content-section">
        <div className="course-container">
          {allCourses.map((curr) => (
            <div className="course-post" key={curr.courseDTO.id}>
              <img className="cover-img" src={curr.courseDTO.imageUrl} alt="" />
              <h2 className="title">{curr.courseDTO.title}</h2>
              <p className="description">
                {curr.courseDTO.description.split(" ").slice(0, 25).join(" ")}
              </p>
              <div className="card-details">
                <div className="lh-details">
                  <img
                    className="author-img"
                    src={curr.instructorDTO.imageUrl}
                    alt=""
                  />
                  <p className="date">
                    {new Date(
                      `${curr.courseDTO.publishedDate}`
                    ).toLocaleDateString("en-us", {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })}
                  </p>
                </div>
              </div>
              <Link
                to={`/courses/${curr.courseDTO.id}`}
                className="btn btn-info"
              >
                View Course
              </Link>
              &nbsp;
              <button
                className="btn btn-success"

                onClick={() => {handleAddToCart(curr.courseDTO.id);}}
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
  const [allCourses1, setAllCourses] = useState(null);
  const { allCourses } = useAuth();
  //populate all courses
  useEffect(() => {
    const fetchData = async () => {
      try {
        const courses = await allCourses; // Calling the getAllCourses function
        toast.promise(courses, {
          // pending: "Loading courses...",
          success: "Courses loaded",
          error: "Error fetching courses",
        });
        // const courses = await coursesPromise;
        setAllCourses(courses);
      } catch (error) {
        console.error("Error fetching courses:", error);
      }
    };

    fetchData();
  }, [allCourses1]);

  return (
      <Page courses={allCourses} />
  );
}
export default AppProducts;
