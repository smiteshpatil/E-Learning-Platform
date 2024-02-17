package com.app.controller;

import com.app.dto.StudentCoursesDTO;
import com.app.service.AdminService;
import com.app.service.StudentCoursesService;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/admin")
@CrossOrigin(origins = "http://localhost:3000")
public class AdminController {

    @Autowired
    private AdminService adminService;

    @Autowired
    private StudentCoursesService studentCourseService;

    @GetMapping("/enrolledStudents")
    public int getTotalStudents() {
        return adminService.getTotalStudents();
    }

    @GetMapping("/studentCourse")
    public List<StudentCoursesDTO> getStudentCourseDetails() {
        return studentCourseService.getStudentCourseDetails();
    }

}
