package com.app.payment;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class PaymentConfirmationRequest {
	private String paymentId;
	private String orderId;
	private Long courseId;
	private Long studentId;
	
}
