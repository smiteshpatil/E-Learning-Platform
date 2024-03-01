package com.app.service;

import java.time.LocalDate;

import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.custom_exceptions.ResourceNotFoundException;
import com.app.dao.CourseRepository;
import com.app.dao.CourseStudentDetailsRepository;
import com.app.dao.StudentRepository;
import com.app.entities.Course;
import com.app.entities.CourseStudentDetails;
import com.app.entities.CourseStudentId;
import com.app.entities.Student;
import com.app.payment.PaymentConfirmationRequest;
import com.app.payment.PaymentRequest;
import com.razorpay.Order;
import com.razorpay.RazorpayClient;
import com.razorpay.RazorpayException;

@Service
public class PaymentService {

	@Autowired
	private CourseRepository courseRepo;

	@Autowired
	private CourseService courseService;

	@Autowired
	private StudentRepository studentRepo;

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
		return order.toString(); // Return the created order ID
	}

	public boolean confirmPayment(PaymentConfirmationRequest confirmationRequest) {
		if (confirmationRequest != null && confirmationRequest.getPaymentId() != null) {
			boolean paymentConfirmed = true; // Placeholder for payment confirmation status
			if (paymentConfirmed) {

				Course course = courseRepo.findById(confirmationRequest.getCourseId())
						.orElseThrow(() -> new ResourceNotFoundException("Invalid Course id !!!"));
				Student student = studentRepo.getReferenceById(confirmationRequest.getStudentId());
				CourseStudentDetails details = new CourseStudentDetails();
				details.setEnrolledDate(LocalDate.now());
				details.setMyStudent(student);
				details.setMyCourse(course);
				details.setAmount(course.getPrice().toString());
				details.setPaymentId(confirmationRequest.getPaymentId());
				details.setOrderId(confirmationRequest.getOrderId().toString());
				details.setStatus("paid");
				courseStudentRepo.save(details);
			}
			return paymentConfirmed;
		} else {
			return false;
		}
	}

}
