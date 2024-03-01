import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import img from "../../images/card1.jpg";
import CourseContent from "./CourseContent";
import { useNavigate } from "react-router-dom";
import "./CoursePage.css";
import {
  handleOrderAndPayment,
  confirmPaymentAndEnrollStudent,
} from "../../api/paymentService";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

const CoursePage = () => {
  const { authUser, allCourses, isLoading } = useAuth();
  const { id } = useParams();
  const [currCourse, setCurrCourse] = useState({});

  let navigate = useNavigate();

  // function to handle create new Order
  const handleCreateOrder = async () => {
    if (authUser) {
      try {
        const resp = await toast.promise(
          handleOrderAndPayment(id, currCourse.courseDTO.price, authUser),
          {
            success: "Order created successfully!",
            pending: "Hold On! Do not refresh this page",
            error: "Error processing request",
          }
        );
        console.log("==>", resp);
        if (resp) {
          Swal.fire({
            title: "Congratulations !",
            text: "your payment is sucessfull!",
            icon: "success",
          });
          //   paymentId, orderId, courseId,studentId
          //  enroll student
          let paymentData = {
            paymentId: resp.razorpay_payment_id,
            orderId: resp.razorpay_order_id,
            courseId: id,
            studentId: authUser.id,
          };
          console.log("In coursePage:-->", paymentData);
          const res = await confirmPaymentAndEnrollStudent(paymentData);
        } else {
          toast.error("unexpected error occured");
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      toast("Please login to buy course !");
      navigate("/login");
    }
  };

  useEffect(() => {
    console.log("in useEffect 14");
    if (!isLoading) {
      const fetchCurrentCourse = () => {
        const specificCourse = allCourses.find(
          (curr) => curr.courseDTO.id == id
        );
        if (specificCourse) {
          console.log("In if 21", specificCourse);
          setCurrCourse(specificCourse);
        } else {
          console.log("No course found with ID:", id);
        }
      };
      fetchCurrentCourse();
      console.log("useEffect Called");
    }
  }, [isLoading, allCourses, id]);

  return (
    <div className="container-fluid my-3 course-page">
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <div className="container mt-5">
          <div className="row">
            <div className="col-sm-8">
              <div>
                <h2>
                  {currCourse.courseDTO && currCourse.courseDTO.courseName}
                </h2>
                <h5>{currCourse.courseDTO && currCourse.courseDTO.heading}</h5>
                <div className="review">BestSeller/created by</div>
                <p>
                  {currCourse.contentDTO && currCourse.instructorDTO.firstName}
                </p>
              </div>
              <h3 className="mt-4">What you will learn</h3>
              <div className="row">
                <p>
                  {currCourse.courseDTO && currCourse.courseDTO.description}
                </p>
              </div>

              <h3 className="mt-4">This course includes</h3>
              {currCourse.contentDTO &&
                currCourse.contentDTO.map((each, index) => (
                  <div className="row" key={index}>
                    <div className="col-sm-4">{each.contentName}</div>
                    <div className="col-sm-8">
                      {each.contentDescription
                        .split(" ")
                        .slice(0, 30)
                        .join(" ")}
                      {"..."}
                      <br />
                      <br />
                    </div>
                  </div>
                ))}

              {/* <h3 className="mt-4">
                Top companies offer this course to their employees
              </h3>
              <h5>Sub heading</h5>
              <div className="row">
                <div className="col-sm-6">First</div>
                <div className="col-sm-6">Second</div>
              </div> */}

              <CourseContent />
            </div>
            <div className="col-sm-4 ">
              <div className="card course-card">
                <img src={img} alt="John" style={{ width: "100%" }} />
                <br />
                <h3>
                  {currCourse.courseDTO && currCourse.courseDTO.courseName}
                </h3>
                {/* <p className="title course-title">CEO & Founder, Example</p>
                <p>Harvard University</p> */}
                <h3>{currCourse.courseDTO && currCourse.courseDTO.price}</h3>
                <button
                  onClick={handleCreateOrder}
                  className="btn"
                  style={{ color: "white", backgroundColor: "#512da8" }}
                >
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CoursePage;
