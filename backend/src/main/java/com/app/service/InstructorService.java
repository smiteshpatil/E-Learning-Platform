package com.app.service;

import java.util.List;

import com.app.dto.InstructorCoursesDTO;
import com.app.dto.InstructorDTO;
import com.app.entities.Instructor;

public interface InstructorService {
	
	List<InstructorDTO> getAllInstructors();
	InstructorDTO getInstructorDetails(Long instructorId);
	InstructorDTO addNewInstructor(InstructorDTO inst);
	InstructorCoursesDTO getInstructorAndCourseDetails(Long instructorId);
}
