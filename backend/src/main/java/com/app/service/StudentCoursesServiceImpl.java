package com.app.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.dao.StudentCourseRepository;
import com.app.dto.StudentCoursesDTO;

@Service
public class StudentCoursesServiceImpl implements StudentCoursesService {

    @Autowired
    private StudentCourseRepository studentCourseRepository;

    @Override
    public List<StudentCoursesDTO> getStudentCourseDetails() {
        return studentCourseRepository.getStudentCourseDetails();
    }
}
