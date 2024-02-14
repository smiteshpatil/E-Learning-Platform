package com.app.service;

import java.util.List;

public interface CartService {
	String addCoursesToCart(String studentEmail, List<Long> courseIds);

	List<Long> getAllCourseIdFromCart(String studentEmail);
}
