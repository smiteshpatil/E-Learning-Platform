package com.app.service;

import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.dao.CourseStudentDetailsRepository;
import com.app.entities.CourseStudentDetails;
import com.app.payment.PaymentConfirmationRequest;
import com.app.payment.PaymentRequest;
import com.razorpay.Order;
import com.razorpay.RazorpayClient;
import com.razorpay.RazorpayException;

@Service
public class PaymentService {

	@Autowired
	private CourseService courseService;
	@Autowired
	private CourseStudentDetailsRepository courseStudentRepo;

	public String createOrder(PaymentRequest paymentRequest) throws RazorpayException {
		// Create order request object
		RazorpayClient client = new RazorpayClient("rzp_test_3X63iUA3Q2A9yz", "s828xCTwjnZEigOnZwzZbwli");

		JSONObject orderRequest = new JSONObject();
		orderRequest.put("amount", paymentRequest.getAmount() * 100); // Amount in paisa
		orderRequest.put("currency", "INR");
		orderRequest.put("receipt", "txn_359" + System.currentTimeMillis());

		// Create a new order using Razorpay API
		Order order = client.orders.create(orderRequest);
		System.out.println(order);

//		// Save order details in the database
		if (order.get("status") == "paid") {
			CourseStudentDetails myOrder = new CourseStudentDetails();
			myOrder.setAmount((order.get("amount").toString())); // Convert Integer to String
			myOrder.setOrderId(order.get("id").toString()); // Convert Object to String
			myOrder.setPaymentId(order.get("payment_id").toString());
			myOrder.setReceipt(order.get("receipt").toString()); // Convert Object to String
			courseStudentRepo.save(myOrder);
		}

		return order.toString(); // Return the created order ID
	}

	public boolean confirmPayment(PaymentConfirmationRequest confirmationRequest) {
		if (confirmationRequest != null && confirmationRequest.getPaymentId() != null) {
			boolean paymentConfirmed = true; // Placeholder for payment confirmation status
			// If payment is confirmed, enroll the student in the course
			if (paymentConfirmed) {
				courseService.assignStudentToCourse(confirmationRequest.getCourseId(),
						confirmationRequest.getStudentId());
			}
			return paymentConfirmed;
		} else
			return false;
	}

}
