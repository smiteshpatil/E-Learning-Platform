package com.app.controller;

import java.util.List;

import javax.validation.Valid;
import javax.validation.constraints.Max;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotNull;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.CourseDTO;
import com.app.dto.CourseRespDTO;
import com.app.dto.CourseStudent;
import com.app.service.CourseService;

@RestController
@RequestMapping("/courses")
public class CourseController {
	@Autowired
	private CourseService courseService;

	@GetMapping
	public ResponseEntity<?> getAllCourses(){
		return ResponseEntity.ok(courseService.getAllCourses());
	}
	
	
	
	// add new course to existing instructor //request payload : AddCourse dto
	@PostMapping("/add")
	public ResponseEntity<?> addCourseToExistingInstructor(@RequestBody @Valid CourseDTO dto) {
		System.out.println("In add course" + dto);
		return ResponseEntity.status(HttpStatus.CREATED).body(courseService.addNewCourse(dto));
	}

	// update course details by Id
	@PutMapping("/update/{courseId}")
	public ResponseEntity<?> updateCourse(@PathVariable Long courseId, @RequestBody @Valid CourseDTO dto) {
		System.out.println("In Update Course :: courseId - " + courseId + "  " + dto);
		return ResponseEntity.ok(courseService.updateCourse(courseId, dto));
	}

	// delete course details by Id
	@DeleteMapping("/delete/{courseId}")
	public ResponseEntity<?> deleteCourse(@PathVariable Long courseId) {
		System.out.println("in delete course " + courseId);
		return ResponseEntity.ok(courseService.deleteCourseDetails(courseId));
	}

	// get all courses by Instructor Id
	@GetMapping("/{instructorId}")
	public ResponseEntity<?> getCoursesByInstructorId(@PathVariable Long instructorId) {
		System.out.println("In get courses from instructor" + instructorId);
		List<CourseRespDTO> list = courseService.getAllCoursesFromInstructor(instructorId);
		if (list.isEmpty())
			return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
		// course not found
		return ResponseEntity.ok(list);
	}

	// GET course details by Instructor & Course Id
	// Instructor id is here just used for validation
	@GetMapping("{instructorId}/{courseId}")
	public ResponseEntity<?> getCourseDetailsByInstructorAndCourseId(@PathVariable Long instructorId,
			@PathVariable Long courseId) {
		System.out.println("in get course details by instructor id n course id " + instructorId + " " + courseId);
		return ResponseEntity.ok(courseService.getCourseDetails(courseId, instructorId));
	}

	@GetMapping("/paginated")
	public ResponseEntity<?> getAllCoursesPaginated(@RequestParam(defaultValue = "0", required = false) int pageNumber,
			@RequestParam(defaultValue = "3", required = false) int pageSize) {
		System.out.println("in get all instructors " + pageNumber + " " + pageSize);
		List<CourseRespDTO> list = courseService.getAllCourses(pageNumber, pageSize);
		if (list.isEmpty())
			return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
		// courses found
		return ResponseEntity.ok(list);
	}

	// enroll student to Course
	@PostMapping("/enrollCourse")
	public ResponseEntity<?> enrollCourse(@RequestBody CourseStudent courseStudent) {
		System.out.println("in Enroll course " + courseStudent);
		return ResponseEntity
				.ok(courseService.assignStudentToCourse(courseStudent.getCourseId(), courseStudent.getStudentId()));
	}

	// remove course from student
	@DeleteMapping("/removeCourse")
	public ResponseEntity<?> removeStudentFromCourse(@RequestBody CourseStudent courseStudent) {
		return ResponseEntity
				.ok(courseService.removeStudentFromCourse(courseStudent.getCourseId(), courseStudent.getStudentId()));
	}

	// get all courses by Student Id
	@GetMapping("/student/{studentId}")
	public ResponseEntity<?> getCoursesByStudentId(@PathVariable Long studentId) {
		System.out.println("In get courses from student" + studentId);
		List<CourseRespDTO> list = courseService.getAllCoursesFromStudent(studentId);
		if (list.isEmpty())
			return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
		// course not found
		return ResponseEntity.ok(list);
	}

}
