package com.app.controller;

import javax.validation.constraints.Max;
import javax.validation.constraints.Min;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

//import com.app.service.ImageHandlingService;
//import com.app.service.ImageHandlingService;
import com.app.service.InstructorService;

@RestController
@RequestMapping("/instructors")
@Validated
@CrossOrigin(origins = "http://localhost:3000")
public class InstructorController {

	@Autowired
	private InstructorService instructorService;

	// get All instructors - access only to ADMIN
	@GetMapping
	public ResponseEntity<?> getAllInstructors() {
		System.out.println("in GET all student ");
		return ResponseEntity
				.ok(instructorService.getAllInstructors());

	}

	// get Instructor details
	@GetMapping("/{instructorId}")
	public ResponseEntity<?> getInstructorDetails(@PathVariable Long instructorId) {
		System.out.println("In get Instructor details " + instructorId);
		return ResponseEntity.ok(instructorService.getInstructorDetails(instructorId));
	}

	// get Instructor and courses details
	@GetMapping("/{instructorId}/courses")
	public ResponseEntity<?> getInstructorAndCoursesDetails(@PathVariable @Min(1) @Max(10) Long instructorId) {
		System.out.println("In get instructor and courses " + instructorId);
		return ResponseEntity.ok(instructorService.getInstructorAndCourseDetails(instructorId));
	}
}
