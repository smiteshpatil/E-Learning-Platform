package com.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dao.CourseStudentDetailsRepository;
import com.app.dto.CourseRespDTO;
import com.app.dto.InstructorCoursesDTO;
import com.app.dto.StudentCoursesDTO;
import com.app.dto.StudentDTO;
import com.app.service.AdminService;
import com.app.service.CourseService;
import com.app.service.StudentCoursesService;

@RestController
@RequestMapping("/admin")
@CrossOrigin(origins = "http://localhost:3000")
public class AdminController {

    private final AdminService adminService;
    private final CourseService courseService;
    @Autowired
    private StudentCoursesService studentCourseService;

    @Autowired
    public AdminController(AdminService adminService, CourseService courseService) {
        this.adminService = adminService;
        this.courseService = courseService;

    }

    @Autowired
    private CourseStudentDetailsRepository courseStudentDetailsRepository;

    @GetMapping("/enrolledStudents")
    public int getTotalStudents() {
        return adminService.getTotalStudents();
    }

    @GetMapping("/studentcourses")
    public List<StudentCoursesDTO> getStudentCourseDetails() {
        return studentCourseService.getStudentCourseDetails();
    }

    // get info only instructor info email, course name and published date
    @GetMapping("/instructorinfo")
    public ResponseEntity<List<InstructorCoursesDTO>> getInstructorsWithCourseInfo() {
        List<InstructorCoursesDTO> instructors = adminService.getInstructorsWithCourseInfo();
        return ResponseEntity.ok(instructors);
    }

    // getting info of total No of Students enrolled in each course and avg ratings
    // for it for admin
    @GetMapping("/coursedetails")
    public ResponseEntity<List<CourseRespDTO>> getAllCourseDetails() {
        List<CourseRespDTO> courseDetailsDTOList = adminService.getAllCourseDetails();
        return ResponseEntity.ok(courseDetailsDTOList);
    }

    // get student details fName Lname email and rating given to course
    @GetMapping("/students/{courseId}")
    public ResponseEntity<List<StudentDTO>> getStudentDetailsByCourseId(@PathVariable Long courseId) {
        List<StudentDTO> studentDetailsList = adminService.getStudentDetailsByCourseId(courseId);
        return ResponseEntity.ok(studentDetailsList);
    }

    @DeleteMapping("/{courseId}/{studentId}")
    public ResponseEntity<String> deleteStudentFromCourse(@PathVariable Long courseId, @PathVariable Long studentId) {
        adminService.deleteStudentFromCourse(courseId, studentId);
        return ResponseEntity.ok("Student deleted from course successfully");
    }
}
