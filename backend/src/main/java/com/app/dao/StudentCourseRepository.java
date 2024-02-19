package com.app.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import org.springframework.stereotype.Repository;

import com.app.dto.StudentCoursesDTO;
import com.app.entities.CourseStudentDetails;

@Repository
public interface StudentCourseRepository extends JpaRepository<CourseStudentDetails, Long> {

    @Query("SELECT COUNT(DISTINCT csd.courseStudentId.studentId) FROM CourseStudentDetails csd WHERE csd.myCourse IS NOT NULL")
    int getTotalStudentsEnrolledInCourses();
    
//    @Query("SELECT new com.app.dto.StudentCoursesDTO(s.email,c.courseId, c.courseName, sc.enrolledDate) FROM CourseStudentDetails sc JOIN sc.myCourse c JOIN sc.myStudent s")
//    List<StudentCoursesDTO> getStudentCourseDetails();
    
    /////////////////useful 
//    @Query("SELECT new com.app.dto.StudentCoursesDTO(s.email, c.id, c.courseName, sc.enrolledDate) FROM CourseStudentDetails sc JOIN sc.myCourse c JOIN sc.myStudent s")
//    List<StudentCoursesDTO> getStudentCourseDetails();
    
    ///////////////
    @Query("SELECT new com.app.dto.StudentCoursesDTO(s.email, c.id, s.id, c.courseName, sc.enrolledDate) FROM CourseStudentDetails sc JOIN sc.myCourse c JOIN sc.myStudent s")
    List<StudentCoursesDTO> getStudentCourseDetails();
    

}
