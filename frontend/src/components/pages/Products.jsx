import { useState, useEffect } from "react";
//import { CartProvider, useCart } from "react-use-cart";
import { toast } from "react-toastify";
import { useAuth } from "../../context/AuthContext";
import "react-toastify/dist/ReactToastify.css";
import { Link, useParams } from "react-router-dom";
const Page = (props) => {
  //index to filter courses
  let { index } = useParams();

  const categories = [
    { name: "development" },
    { name: "finance" },
    { name: "business" },
    { name: "digitalMarketing" },
    { name: "graphicsDesign" },
    { name: "entrepreneurship" },
    { name: "allCategories" },
  ];

  const { cart, setCart, allCourses } = useAuth();

  const [currentCategory, setCurrentCategory] = useState([]);

  //handle add to cart
  function handleAddToCart(id) {
    console.log("ID: " + id);
    setCart((prevState) => [...prevState, id]);
    localStorage.setItem("cart", cart);
  }

  useEffect(() => {
    if (index == 6) {
      setCurrentCategory(allCourses);
    } else {
      setCurrentCategory(
        allCourses.filter(
          (curr) => categories[index].name == curr.courseDTO.category
        )
      );
    }
  }, []);

  console.log("In page comp", props.courses);
  return (
    <>
      <div className="container course-content-section">
        <div className="course-container">
          {currentCategory.map((curr) => (
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
                onClick={() => {
                  handleAddToCart(curr.courseDTO.id);
                }}
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

  return <Page courses={allCourses} />;
}
export default AppProducts;
