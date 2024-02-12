package com.app.service;

import java.util.List;


import com.app.dto.StudentCoursesDTO;
import com.app.dto.StudentDTO;

public interface StudentService {
	
	List<StudentDTO> getAllStudents();
	StudentDTO getStudentDetails(Long studentId);
	StudentDTO updateStudent(Long studentId,StudentDTO dto);
	String deleteStudent(Long studentId);
	
	StudentCoursesDTO getStudentAndCoursesDetails(Long studentId);
	
}
