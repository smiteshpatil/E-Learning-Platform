package com.app.dao;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import com.app.entities.Student;

public interface StudentRepository extends JpaRepository<Student, Long> {
	// add a finder to get Instructor details by it's email
	Optional<Student> findByEmail(String email);


	
	 long count();
	 


//	@Query("select s from students s")
//	List<Student> getAllStudents();

}
