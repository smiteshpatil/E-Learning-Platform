package com.app.service;



import java.util.List;

import org.springframework.stereotype.Service;

import com.app.dto.AdminDTO;
import com.app.dto.CourseDTO;
import com.app.dto.CourseInstructorDto;
import com.app.dto.CourseRespDTO;
import com.app.dto.CourseStudent;
import com.app.dto.InstructorCoursesDTO;
import com.app.dto.InstructorDTO;
import com.app.dto.StudentDTO;

//@Service
public interface AdminService {
	AdminDTO getAdminByEmail(String adminEmail);
	int getTotalStudents();
	
	public List<InstructorCoursesDTO> getInstructorsWithCourseInfo();
	
//	CourseRespDTO  getCourseDetails(Long courseId);
	 List<CourseRespDTO> getAllCourseDetails();
	 
	 //to get student details(fname,lname, email,rating) by course id 
	 List<StudentDTO> getStudentDetailsByCourseId(Long courseId);
	 
	 
	
	 void deleteStudentFromCourse(Long courseId, Long studentId);
	 
}

 