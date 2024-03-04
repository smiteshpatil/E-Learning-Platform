package com.app.controller;

import java.io.IOException;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.app.dao.AdminRepository;
import com.app.dao.CourseRepository;
import com.app.dao.InstructorRepository;
import com.app.dao.StudentRepository;
import com.app.entities.Admin;
import com.app.entities.Course;
import com.app.entities.Instructor;
import com.app.entities.Student;

@RestController
@RequestMapping("/images")
@CrossOrigin(origins = {"http://localhost:3000","http://65.1.87.251/","http://65.1.87.251/80" ,"http://e-learning-platform.online/","http://e-learning-platform.online/80",})
public class ImageController {

	@Autowired
	private InstructorRepository instructorRepository;
	@Autowired
	private StudentRepository studentRepository;
	@Autowired
	private AdminRepository adminRepo;
	@Autowired
	private CourseRepository courseRepository;

	@PostMapping("/upload")
	public ResponseEntity<?> uploadImage(@RequestParam("file") MultipartFile file, @RequestParam("type") String type,
			@RequestParam("id") Long id) {
		if (file.isEmpty()) {
			return ResponseEntity.badRequest().body("Please select a file to upload.");
		}

		try {
			byte[] imageData = file.getBytes();

			switch (type.toLowerCase()) {
			case "admin":
				Optional<Admin> adminOptional = adminRepo.findById(id);
				if (adminOptional.isPresent()) {
					Admin admin = adminOptional.get();
					admin.setImage(imageData);
					adminRepo.save(admin);
				}
				break;

			case "instructor":
				Optional<Instructor> instructorOptional = instructorRepository.findById(id);
				if (instructorOptional.isPresent()) {
					Instructor instructor = instructorOptional.get();
					instructor.setImage(imageData);
					instructorRepository.save(instructor);
				}
				break;

			case "student":
				Optional<Student> studentOptional = studentRepository.findById(id);
				if (studentOptional.isPresent()) {
					Student student = studentOptional.get();
					student.setImage(imageData);
					studentRepository.save(student);
				}
				break;

			case "course":
				Optional<Course> courseOptional = courseRepository.findById(id);
				if (courseOptional.isPresent()) {
					Course course = courseOptional.get();
					course.setCoursePoster(imageData);
					courseRepository.save(course);
				}
				break;

			default:
				return ResponseEntity.badRequest().body("Invalid type specified.");
			}

			return ResponseEntity.ok().body("Image uploaded successfully.");
		} catch (IOException ex) {
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Failed to upload image.");
		}
	}

	@GetMapping("/download")
	public ResponseEntity<byte[]> downloadImage(@RequestParam("type") String type, @RequestParam("id") Long id) {
		byte[] imageData = null;

		switch (type.toLowerCase()) {
		case "admin":
			Optional<Admin> adminOptional = adminRepo.findById(id);
			if (adminOptional.isPresent()) {
				imageData = adminOptional.get().getImage();
			}
			break;
		case "instructor":
			Optional<Instructor> instructorOptional = instructorRepository.findById(id);
			if (instructorOptional.isPresent()) {
				imageData = instructorOptional.get().getImage();
			}
			break;
		case "student":
			Optional<Student> studentOptional = studentRepository.findById(id);
			if (studentOptional.isPresent()) {
				imageData = studentOptional.get().getImage();
			}
			break;
		case "course":
			Optional<Course> courseOptional = courseRepository.findById(id);
			if (courseOptional.isPresent()) {
				imageData = courseOptional.get().getCoursePoster();
			}
			break;
		default:
			return ResponseEntity.badRequest().body(null);
		}

		if (imageData != null) {
			return ResponseEntity.ok().contentType(MediaType.IMAGE_JPEG).body(imageData);
		} else {
			return ResponseEntity.notFound().build();
		}
	}
}
