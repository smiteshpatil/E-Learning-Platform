import axios from "axios";

const baseUrl = "http://localhost:8080";

// // first request to server to create a order
// export const createPaymentRequest = (studentId, courseId, price) => {
//   console.log("payment started", studentId, courseId, price);
//   let orderDetails = {
//     courseId: parseInt(courseId),
//     studentId: parseInt(studentId),
//     amount: parseInt(price),
//   };
//   try {
//     const response = axios.post(
//       baseUrl + `/payments/createOrder`,
//       orderDetails
//     );
//     return response;
//   } catch (error) {
//     throw error;
//   }
// };

export const createOrder = async (data) => {
  try {
    const response = await axios.post(
      "http://localhost:8080/payments/createOrder",
      data,
      {
        headers: {
          "Content-Type": "application/json",
          accept: "*/*",
        },
      }
    );
    console.log(response.data);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.error.description);
  }
};

export const handleOrderAndPayment = async (
  courseId,
  coursePrice,
  userDetails
) => {
  try {
    let orderData = {
      courseId: parseInt(courseId),
      studentId: parseInt(userDetails.id),
      amount: parseInt(coursePrice),
    };

    console.log(orderData);

    const response = await createOrder(orderData);
    const orderId = response.id;

    // Initialize the payment using Razorpay API
    const options = {
      key: "rzp_test_3X63iUA3Q2A9yz",
      amount: response.amount_due,
      currency: response.currency,
      order_id: orderId,
      name: "E-Learning Platform",
      description: "Payment for Course purchase",
      handler: async function (response) {
        console.log("Payment successful:", response);
        return response;
      },
      prefill: {
        name: userDetails.firstName,
        email: userDetails.email,
        contact: userDetails.phone,
      },
      notes: {},
      theme: {
        color: "#512da8",
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  } catch (error) {
    console.error("Error handling order and payment:", error);
    // Handle error (e.g., show error message)
  }
};
