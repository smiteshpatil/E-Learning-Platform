package com.app.controller;

import java.util.List;

import javax.validation.Valid;
import javax.validation.constraints.Max;
import javax.validation.constraints.Min;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.StudentDTO;
<<<<<<< HEAD
import com.app.entities.Course;
import com.app.service.CartService;
import com.app.service.CourseService;
=======
>>>>>>> 57d647ac151ffff3b4642a757040b85f4c5717b0
import com.app.service.StudentService;

@RestController
@RequestMapping("/students")
@Validated
public class StudentController {
	@Autowired
	private StudentService studentService;
<<<<<<< HEAD
	
	@Autowired
	private CourseService courseService;
	
	@Autowired
	private CartService cartService;
	
	@GetMapping
	public ResponseEntity<?> getAllStudentDetails() {
		System.out.println("in GET all student " );
		return ResponseEntity
				.ok(studentService.getAllStudents());
=======

	@GetMapping
	public ResponseEntity<?> getAllStudentDetails() {
		System.out.println("in GET all student ");
		return ResponseEntity.ok(studentService.getAllStudents());

>>>>>>> 57d647ac151ffff3b4642a757040b85f4c5717b0
	}

	@GetMapping("/{studentId}")
	public ResponseEntity<?> getStudentDetails(@PathVariable Long studentId) {
		System.out.println("in GET student " + studentId);
<<<<<<< HEAD
		return ResponseEntity
				.ok(studentService.getStudentDetails(studentId));
=======
		return ResponseEntity.ok(studentService.getStudentDetails(studentId));

>>>>>>> 57d647ac151ffff3b4642a757040b85f4c5717b0
	}

	@PutMapping("/update/{studentId}")
	public ResponseEntity<?> updateStudent(@PathVariable Long studentId, @RequestBody @Valid StudentDTO dto) {
		System.out.println("in update student  " + studentId + " " + dto);
		return ResponseEntity.ok(studentService.updateStudent(studentId, dto));
	}

	@DeleteMapping("/delete/{studentId}")
	public ResponseEntity<?> deleteStudent(@PathVariable Long studentId) {
		System.out.println("in update student  " + studentId);
		return ResponseEntity.ok(studentService.deleteStudent(studentId));
	}
	
	@GetMapping("/{studentId}/courses")
	public ResponseEntity<?> getStudentAndCoursesDetails(@PathVariable @Min(1) @Max(10) Long studentId) {
		System.out.println("in GET student n courses dtls " + studentId);
		return ResponseEntity.ok(studentService.getStudentAndCoursesDetails(studentId));
	}
<<<<<<< HEAD
	
	@PostMapping("/enrollCourse/{studentId}/{courseId}")
	public ResponseEntity<?> enrollCourse(@PathVariable Long studentId,@PathVariable Long courseId) {
		System.out.println("in Enroll course " + studentId);
		return ResponseEntity.ok(courseService.assignStudentToCourse(courseId, studentId));
	}
	
	@PostMapping("/enrollCourse/{studentId}")
	public ResponseEntity<?> enrollMultipleCourses(@PathVariable Long studentId, @RequestBody List<Long>courseIds){
		return ResponseEntity.ok(courseService.assignStudentToMultipleCourses(studentId, courseIds));
	}
	
	@PostMapping("/cartItems/{studentId}")
	public ResponseEntity<?> SaveCartItems(@PathVariable Long studentId, @RequestBody List<Long> courseIds){
		return ResponseEntity.ok(cartService.addCoursesToCart(studentId, courseIds));
	}
	
	@GetMapping("/cartItems/{studentEmail}")
	public ResponseEntity<?> GetAllCartItems(@PathVariable String studentEmail){
		List<Long> courseIds = cartService.getAllCourseIdFromCart(studentEmail);
		return ResponseEntity.ok(courseIds);
	}
	
	
=======

>>>>>>> 57d647ac151ffff3b4642a757040b85f4c5717b0
}
