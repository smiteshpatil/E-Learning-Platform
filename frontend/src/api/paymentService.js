import axios from "axios";

const baseUrl = "http://localhost:8080";

// first request to server to create a order
export const createPaymentRequest = (orderDetails) => {
  console.log("payment started");
  try {
    const response = axios.post(
      baseUrl + `/payments/createOrder`,
      orderDetails
    );
    return response;
  } catch (error) {
    throw error;
  }
};
