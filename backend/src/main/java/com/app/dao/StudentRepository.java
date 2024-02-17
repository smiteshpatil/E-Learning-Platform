package com.app.dao;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import com.app.entities.Student;

public interface StudentRepository extends JpaRepository<Student, Long> {
	// add a finder to get Instructor details by it's email
	Optional<Student> findByEmail(String email);
<<<<<<< HEAD

	long count();

	// @Query("select s from students s")
	// List<Student> getAllStudents();
=======
>>>>>>> 3c48af7a2c1ae48f626a895c25291cb3afbbfa85

	long count();
}
