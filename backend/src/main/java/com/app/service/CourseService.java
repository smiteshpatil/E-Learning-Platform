package com.app.service;

import java.util.List;

import com.app.dto.CourseDTO;
import com.app.dto.CourseRespDTO;
import com.app.dto.GetAllDetailsDTO;

public interface CourseService {

	List<CourseRespDTO> getAllCourses();

	// Get all courses with instructor and content
	List<GetAllDetailsDTO> getAllCoursesWithDetails();

	// delete= course details
	String deleteCourseDetails(Long courseId);

	// add Course
	CourseRespDTO addNewCourse(CourseDTO dto);

	// update Course Details 
	CourseRespDTO updateCourse(Long courseId, CourseDTO dto);

	CourseRespDTO getCourseDetails(Long instructorId, Long courseId);

	// get all courses : pagination
	List<CourseRespDTO> getAllCourses(int pageNumber, int pageSize);

	// Enroll student to single course
	String assignStudentToCourse(Long courseId, Long studentId);

	// Enroll Student to multiple courses
	String assignStudentToMultipleCourses(String studentEmail, List<Long> courseIds);

	String removeStudentFromCourse(Long courseId, Long studentId);

	List<CourseRespDTO> getAllCoursesFromStudent(Long studentId);

	// get list of courses from specific Instructor
	List<CourseRespDTO> getAllCoursesFromInstructor(Long instructorId);

	List<CourseRespDTO> getAllCourseByInstructorEmail(String email);

}
