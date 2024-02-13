package com.app.service;

import java.util.List;

import org.springframework.stereotype.Service;

public interface CartService {
	String addCoursesToCart(String studentEmail, List<Long> courseIds);

	List<Long> getAllCourseIdFromCart(String studentEmail);
}
