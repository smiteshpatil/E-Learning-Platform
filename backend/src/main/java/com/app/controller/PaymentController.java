package com.app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.payment.PaymentConfirmationRequest;
import com.app.payment.PaymentRequest;
import com.app.service.PaymentService;
import com.razorpay.RazorpayException;

@RestController
@RequestMapping("/payments")
@CrossOrigin(origins = "http://localhost:3000")
public class PaymentController {

	@Autowired
	private PaymentService paymentService;

	@PostMapping("/createOrder")
	public ResponseEntity<?> createOrder(@RequestBody PaymentRequest paymentRequest) throws RazorpayException {
		String order = paymentService.createOrder(paymentRequest);
		return ResponseEntity.ok(order);
	}

	@PostMapping("/confirmPayment")
	public ResponseEntity<?> confirmPayment(@RequestBody PaymentConfirmationRequest confirmationRequest) {
		boolean paymentConfirmed = paymentService.confirmPayment(confirmationRequest);
		if (paymentConfirmed) {
			return ResponseEntity.ok("Payment confirmed successfully.");
		} else {
			return ResponseEntity.badRequest().body("Payment confirmation failed.");
		}
	}
}
