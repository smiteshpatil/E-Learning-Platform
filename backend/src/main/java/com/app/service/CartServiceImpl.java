package com.app.service;

import java.util.ArrayList;
import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.custom_exceptions.ResourceNotFoundException;
import com.app.dao.CartItemRepository;
import com.app.dao.CourseRepository;
import com.app.dao.StudentRepository;
import com.app.entities.CartItem;
import com.app.entities.Course;
import com.app.entities.Student;

@Service
@Transactional
public class CartServiceImpl implements CartService{
	@Autowired
	private StudentRepository studentRepository;
	@Autowired
	private CourseRepository courseRepository;
	@Autowired
	private CartItemRepository cartItemRepository;
	
	@Override
	public String addCoursesToCart(Long studentId, List<Long> courseIds) {
		// TODO Auto-generated method stub
		Student student = studentRepository.findById(studentId).orElseThrow(()-> new ResourceNotFoundException("Invalid StudentID !"));
		List<Course> courses = courseRepository.findAllById(courseIds);
		
		List<CartItem> cartItems = new ArrayList<>();
		
		for(Course course: courses)
		{
			CartItem cartItem = new CartItem();
			cartItem.setStudent(student);
			cartItem.setCourse(course);
			
			cartItems.add(cartItem);
		}
		
		cartItemRepository.saveAll(cartItems);
		
		return "Courses in the cart have been added successfully ";
	}
 
	@Override
	public List<Long> getAllCourseIdFromCart(String studentEmail) {
		// TODO Auto-generated method stub
		Student student = studentRepository.findByEmail(studentEmail)
					.orElseThrow(()-> new ResourceNotFoundException("Invalid Student email: "+ studentEmail));
		
		List<CartItem> cartItems = cartItemRepository.findByStudentId(student.getId());
		
		List<Long> courseIds = new ArrayList<>();
		
		for(CartItem cartItem: cartItems) {
			courseIds.add(cartItem.getCourse().getId());
		}
		
		return courseIds;
	}

}
