package com.app.service;

import java.util.List;

import org.springframework.stereotype.Service;


public interface CartService {
	String addCoursesToCart(Long StudentId, List<Long> courseIds);
	List<Long> getAllCourseIdFromCart(String studentEmail);
}
