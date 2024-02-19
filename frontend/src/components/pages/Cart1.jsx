import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
function Cart1() {
  const navigate = useNavigate();
  const { cart, setCart, allCourses } = useAuth();
  const result = allCourses.filter((curr) => cart.includes(curr.courseDTO.id));
  console.log(result);
  function removeCourse(id) {
    const updatedCart = cart.filter((item) => item !== id);
    setCart(updatedCart);
  }
  return (
    <>
      <h1>Cart ({cart.length})</h1>

      <div className="container mt-5">
        <div className="row">
          <div className="col-sm-9">
            <div className="course-content-section">
              <div className="course-container">
                {result.map((curr) => (
                  <div className="course-post" key={curr.courseDTO.id}>
                    <h2 className="title">{curr.courseDTO.courseName}</h2>
                    <button
                      className="btn btn-danger"
                      onClick={() => removeCourse(curr.courseDTO.id)}
                    >
                      &times;
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="col-sm-3 ">
            <h1>Cart ({cart.length})</h1>
            <div className="card course-card">
              {result.map((curr) => (
                <p>
                  {curr.courseDTO.courseName}
                  <button
                    className="btn btn-danger"
                    onClick={() => removeCourse(curr.courseDTO.id)}
                  >
                    &times;
                  </button>
                  <hr />
                </p>
              ))}
            </div>
            <button className="btn btn-success">Check Out</button>
          </div>
        </div>
      </div>
      {/* </div> */}
      <button className="btn btn-warning" onClick={() => navigate("/")}>
        Back
      </button>
    </>
  );
}

function AppCart() {
  return <Cart1 />;
}
export default AppCart;