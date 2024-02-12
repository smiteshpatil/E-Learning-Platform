package com.app.service;

import java.util.List;

import com.app.dto.CourseDTO;
import com.app.dto.CourseRespDTO;

public interface CourseService {
	//get list of courses from specific Instructor
	List<CourseRespDTO> getAllCoursesFromInstructor(Long instructorId);
	
	//delete= course details
	String deleteCourseDetails(Long courseId);
	
	//add Course
	CourseRespDTO addNewCourse(CourseDTO dto);
	
	//update Course Details
	CourseRespDTO updateCourse(Long courseId, CourseDTO dto);
	
	CourseRespDTO getCourseDetails( Long instructorId, Long courseId);
	
	//get all courses : pagination
	List<CourseRespDTO> getAllCourses(int pageNumber,int pageSize);
	
	//Student Related Course
	String assignStudentToCourse(Long courseId, Long studentId);
	
	String removeStudentFromCourse(Long courseId, Long studentId);
	
	List<CourseRespDTO> getAllCoursesFromStudent(Long studentId);
}
