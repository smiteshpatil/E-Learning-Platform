import axios from "axios";

// const baseUrl = "http://localhost:8080";
const baseUrl = "http://3.109.231.43:8080";

//GET: Create order
export const createOrder = async (data) => {
  try {
    const response = await axios.post(baseUrl + "/payments/createOrder", data, {
      headers: {
        "Content-Type": "application/json",
        accept: "*/*",
      },
    });
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

    return new Promise((resolve, reject) => {
      // Initialize the payment using Razorpay API
      const options = {
        key: "rzp_test_3X63iUA3Q2A9yz",
        amount: response.amount_due,
        currency: response.currency,
        order_id: orderId,
        name: "E-Learning Platform",
        description: "Payment for Course purchase",
        handler: function (response) {
          console.log("Payment successful:", response);
          resolve(response); // Resolve the Promise with payment details
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
    });
  } catch (error) {
    console.error("Error handling order and payment:", error);
    // Handle error (e.g., show error message)
    throw error;
  }
};

//POST: payment confirmation service
export const confirmPaymentAndEnrollStudent = async (data) => {
  console.log("in paymentConfirmation service", data);
  try {
    const response = await axios.post(
      baseUrl + "/payments/confirmPayment",
      data
    );
    return response;
  } catch (err) {
    console.log(err);
  }
};
