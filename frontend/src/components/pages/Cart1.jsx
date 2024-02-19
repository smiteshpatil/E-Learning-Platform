import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import CartItem from "./CartItem";
import { FaRupeeSign } from "react-icons/fa";
function Cart1() {
  const navigate = useNavigate();
  const { cart, setCart, allCourses } = useAuth();
  var total = 0;
  const result = allCourses.filter((curr) => cart.includes(String(curr.courseDTO.id)));
  result.map((curr) => total+=curr.courseDTO.price);
  //console.log(result);
  const removeCourse = function (id) {
    console.log("Removing course with ID:", id);
    const updatedCart = cart.filter((item) => item !== String(id));
    console.log("Updated cart:", updatedCart);
    setCart(updatedCart);
  }
  return (
    <>
      <h1>Shopping Cart</h1>
      <div className="container">
        <div className="row">
          <div className="col-sm-9">
                {result.map((curr) => (
                  <CartItem course={curr.courseDTO} onRemove={removeCourse} />
                ))}
          </div>
          <div className="col-sm-3 ">
            <h6>Total:</h6>
            <h2><FaRupeeSign />{total}</h2>
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
