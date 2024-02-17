package com.app.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import com.app.entities.Admin;

import java.util.Optional;

<<<<<<< HEAD

public interface AdminRepository extends JpaRepository<Admin, Long> {
    Optional<Admin> findByEmail(String email);

=======
public interface AdminRepository extends JpaRepository<Admin, Long> {
	Optional<Admin> findByEmail(String email);
>>>>>>> 93a535c66278c45ae3e87791653cbcea8b5c99d0
}
