package com.app.controller;

import javax.validation.Valid;
import javax.validation.constraints.Max;
import javax.validation.constraints.Min;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.StudentCoursesDTO;
import com.app.dto.StudentDTO;
import com.app.service.CourseService;
import com.app.service.StudentService;

@RestController
@RequestMapping("/students")
@Validated
public class StudentController {
	@Autowired
	private StudentService studentService;
	
	@Autowired
	private CourseService courseService;
	
	@GetMapping
	public ResponseEntity<?> getAllStudentDetails() {
		System.out.println("in GET all student " );
		return ResponseEntity
				.ok(studentService.getAllStudents());

	}
	
	@GetMapping("/{studentId}")
	public ResponseEntity<?> getStudentDetails(@PathVariable Long studentId) {
		System.out.println("in GET student " + studentId);
		return ResponseEntity
				.ok(studentService.getStudentDetails(studentId));

	}
	
	@PutMapping("/update/{studentId}")
	public ResponseEntity<?> updateStudent(@PathVariable Long studentId,
			@RequestBody @Valid StudentDTO dto) {
		System.out.println("in update student  " +studentId+" "+ dto);		
		return ResponseEntity.
				ok(studentService.updateStudent(studentId, dto));
	}

	@DeleteMapping("/delete/{studentId}")
	public ResponseEntity<?> deleteStudent(@PathVariable Long studentId) {
		System.out.println("in update student  " +studentId);		
		return ResponseEntity.
				ok(studentService.deleteStudent(studentId));
	}
	
	@GetMapping("/{studentId}/courses")
	public ResponseEntity<?> getStudentAndCoursesDetails(
			@PathVariable @Min(1) @Max(10) Long studentId) {
		System.out.println("in GET student n courses dtls " + studentId);
		return ResponseEntity.ok(studentService.getStudentAndCoursesDetails(studentId));
	}
	
	@PostMapping("/enrollCourse/{studentId}/{courseId}")
	public ResponseEntity<?> enrollCourse(@PathVariable Long studentId,@PathVariable Long courseId) {
		System.out.println("in Enroll course " + studentId);
		return ResponseEntity.ok(courseService.assignStudentToCourse(courseId, studentId));
	}
	
}
