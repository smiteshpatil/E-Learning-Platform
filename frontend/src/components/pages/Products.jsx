import { courses as currentCourses } from "../../api/courseService";
import { CartProvider, useCart } from "react-use-cart";
import { Link } from "react-router-dom";
function Page() {
    const { addItem } = useCart();
  
    return (
      <div>
      <div className="course-content-section">
            <div className="course-container">
      {currentCourses.map((currentCourse) => (
                <div className="course-post" key={currentCourse.id}>
                
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
                  </div>
                  <button onClick={() => addItem(currentCourse)}>Add to cart</button>
                </div>
              ))}
      </div>
      </div>
      </div>
    );
  }
  function AppProducts() {
    return (
      <CartProvider>
        <Page />
        <Link to={`../cart`}>cart</Link>
      </CartProvider>
    );
  }
  export default AppProducts;