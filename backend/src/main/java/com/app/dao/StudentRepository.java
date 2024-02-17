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


	
	 long count();
	 


>>>>>>> 99b44bce319d92fa29189ab4ba57d48a138c99f7
//	@Query("select s from students s")
//	List<Student> getAllStudents();

}
