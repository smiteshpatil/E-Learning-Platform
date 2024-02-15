package com.app.dao;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import com.app.entities.Student;

public interface StudentRepository extends JpaRepository<Student, Long> {
	// add a finder to get Instructor details by it's email
	Optional<Student> findByEmail(String email);
<<<<<<< HEAD
	
	 long count();
	 
=======

>>>>>>> 6c5b6cf8bf80253ab46d3438568305d632b36751
//	@Query("select s from students s")
//	List<Student> getAllStudents();

}
