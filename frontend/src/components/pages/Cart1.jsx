import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import CartItem from "./CartItem";
import { FaRupeeSign } from "react-icons/fa";
import {
  handleOrderAndPayment,
  confirmPaymentService,
} from "../../api/paymentService";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

function Cart1() {
  const navigate = useNavigate();
  const { cart, setCart, authUser, allCourses } = useAuth();
  var total = 0;
  const result = allCourses.filter((curr) =>
    cart.includes(String(curr.courseDTO.id))
  );
  result.map((curr) => (total += curr.courseDTO.price));
  //console.log(result);
  const removeCourse = function (id) {
    console.log("Removing course with ID:", id);
    const updatedCart = cart.filter((item) => item !== String(id));
    console.log("Updated cart:", updatedCart);
    setCart(updatedCart);
  };

  //  CheckOut
  const handleCreateOrder = async () => {
    try {
      const resp = await toast.promise(
        // handleOrderAndPayment(id, currCourse.courseDTO.price, authUser),
        // handleOrderAndPayment(id, currCourse.courseDTO.price, authUser),
        {
          success: "Order created successfully!",
          pending: "Hold On! Do not refresh this page",
          error: "Error processing request",
        }
      );
      // console.log(resp);
      if (resp) {
        Swal.fire({
          title: "Good job!",
          text: "You clicked the button!",
          icon: "success",
        });
        //   paymentId, orderId, courseId,studentId
        //  enroll student
        let paymentData = {
          paymentId: resp.razorpay_payment_id,
          orderId: resp.razorpay_order_id,
          // courseId: id,
          studentId: authUser.id,
        };
        console.log(paymentData);
        // const res = await confirmPaymentService();
      } else {
        toast.error("unexpected error occured");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="container">
        <h1>Shopping Cart</h1>
        <div className="row">
          <div className="col-sm-9">
            {result.map((curr) => (
              <CartItem course={curr.courseDTO} onRemove={removeCourse} />
            ))}
          </div>
          <div className="col-sm-3 ">
            <h6>Total:</h6>
            <h2>
              <FaRupeeSign />
              {total}
            </h2>
            <button onClick={handleCreateOrder} className="btn btn-success">
              Check Out
            </button>
          </div>
        </div>
        {/* </div> */}
        <button className="btn btn-warning" onClick={() => navigate("/")}>
          Back
        </button>
      </div>
    </>
  );
}

function AppCart() {
  return <Cart1 />;
}
export default AppCart;
