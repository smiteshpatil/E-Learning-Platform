package com.app.controller;

import com.app.dto.StudentCoursesDTO;
import com.app.service.AdminService;
import com.app.service.StudentCoursesService;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/admin")
public class AdminController {

    private final AdminService adminService;

    @Autowired
    public AdminController(AdminService adminService) {
        this.adminService = adminService;
    }

    @GetMapping("/enrolledStudents")
    public int getTotalStudents() {
        return adminService.getTotalStudents();
    }
    
    
    @RestController
    @RequestMapping("/student_courses")
    public class StudentCourseController {

        @Autowired
        private StudentCoursesService studentCourseService;

        @GetMapping
        public List<StudentCoursesDTO> getStudentCourseDetails() {
            return studentCourseService.getStudentCourseDetails();
        }
    }
    
}
