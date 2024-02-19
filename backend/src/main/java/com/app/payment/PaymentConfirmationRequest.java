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
	
//	private String orderId;
//	private String amount;
//	private String receipt;
//	private String status;
}
