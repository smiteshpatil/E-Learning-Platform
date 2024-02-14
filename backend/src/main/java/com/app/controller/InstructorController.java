package com.app.controller;

import static org.springframework.http.MediaType.ALL_VALUE;
import static org.springframework.http.MediaType.IMAGE_GIF_VALUE;
import static org.springframework.http.MediaType.IMAGE_JPEG_VALUE;
import static org.springframework.http.MediaType.IMAGE_PNG_VALUE;

import java.io.IOException;

import javax.validation.constraints.Max;
import javax.validation.constraints.Min;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.app.service.ImageHandlingService;
//import com.app.service.ImageHandlingService;
import com.app.service.InstructorService;

@RestController
@RequestMapping("/instructors")
@Validated
@CrossOrigin(origins = "http://localhost:3000")
public class InstructorController {

	@Autowired
	private InstructorService instructorService;

	@Autowired
	@Qualifier("image_db")
	private ImageHandlingService imgService;

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

	// upload image from client n saving it either on db or in server side folder
	@PostMapping(value = "/images/{instructorId}", consumes = "multipart/form-data")
	public ResponseEntity<?> uploadImage(@PathVariable Long instructorId, @RequestParam MultipartFile imageFile)
			throws IOException {
		System.out.println("In upload img " + instructorId);
		return ResponseEntity.status(HttpStatus.CREATED).body(imgService.uploadImage(instructorId, imageFile));

	}

	// download image of specific instructor
	@GetMapping(value = "/images/{instructorId}", produces = { IMAGE_GIF_VALUE, IMAGE_JPEG_VALUE, IMAGE_PNG_VALUE,
			ALL_VALUE })
	public ResponseEntity<?> downloadEmpImage(@PathVariable Long instructorId) throws IOException {
		System.out.println("in download img " + instructorId);
		return ResponseEntity.ok(imgService.downloadImage(instructorId));
	}
}
