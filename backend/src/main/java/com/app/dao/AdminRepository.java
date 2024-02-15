package com.app.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import com.app.entities.Admin;

import java.util.Optional;

<<<<<<< HEAD
public interface AdminRepository extends JpaRepository<Admin, Long> {
    Optional<Admin> findByEmail(String email);
=======
import org.springframework.data.jpa.repository.JpaRepository;

import com.app.entities.Admin;

public interface AdminRepository extends JpaRepository<Admin, Long> {
	Optional<Admin> findByEmail(String email);
>>>>>>> 6c5b6cf8bf80253ab46d3438568305d632b36751
}
