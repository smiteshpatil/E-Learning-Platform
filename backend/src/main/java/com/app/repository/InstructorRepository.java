package com.app.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.entities.Instructor;

public interface InstructorRepository extends JpaRepository<Instructor,Long> {
	//add a finder to get Instructor details by it's email
	Optional<Instructor> findByEmail(String email);

}
