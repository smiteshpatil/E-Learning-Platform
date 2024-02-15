package com.app.dao;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.app.entities.Instructor;

public interface InstructorRepository extends JpaRepository<Instructor, Long> {
	@Query("SELECT i FROM Instructor i LEFT JOIN FETCH i.courses WHERE i.id = :id")
	Instructor getInstructorAndCourseDetails(@Param("id") Long id);

	// add a finder to get Instructor details by it's email
	Optional<Instructor> findByEmail(String email);
}
