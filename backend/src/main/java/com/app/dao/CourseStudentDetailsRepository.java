package com.app.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.app.entities.Course;
import com.app.entities.CourseStudentDetails;
import com.app.entities.CourseStudentId;
import com.app.entities.Student;

public interface CourseStudentDetailsRepository extends JpaRepository<CourseStudentDetails, CourseStudentId> {

	int deleteByMyStudentId(Long studentId);

	int deleteByMyCourseId(Long courseId);

	@Query("select s.myStudent from CourseStudentDetails s where s.myCourse.id=:courseId")
	List<Student> findByCourseId(Long courseId);

	@Query("select c.myCourse from CourseStudentDetails c where c.myStudent.id=:studentId")
	List<Course> findByStudentId(Long studentId);
	


	void deleteByCourseStudentId_CourseIdAndCourseStudentId_StudentId(Long courseId, Long studentId);
	

	

}
