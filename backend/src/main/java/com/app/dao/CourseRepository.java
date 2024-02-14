package com.app.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.app.entities.Course;

public interface CourseRepository extends JpaRepository<Course, Long>{
	/*
	 * @Query("select c from Course c where c.inst.instructorId=:instructorId")
	 * List<Course> findByInstructorId(Long id);
	 */
	
	@Query("select c from Course c where c.inst.id = :id")
	List<Course> findByInstructorId(@Param("id") Long id);

//
//	@Query("select c from student_courses c where c.student_id=:studentId")
//	List<Course> findByStudentId(Long studentId);
//	
}
