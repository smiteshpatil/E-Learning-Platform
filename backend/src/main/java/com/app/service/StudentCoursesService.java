package com.app.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.app.dto.StudentCoursesDTO;


public interface StudentCoursesService {
    List<StudentCoursesDTO> getStudentCourseDetails();
   // List<StudentCoursesDTO> getStudentCourseDetails();
    
}
