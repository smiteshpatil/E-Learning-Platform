package com.app.dao;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.entities.BaseEntity;
import com.app.entities.Instructor;
import com.app.entities.Student;
import com.app.entities.UserInfo;
import com.fasterxml.jackson.databind.deser.Deserializers.Base;

public interface UserRepository extends JpaRepository<UserInfo,Long> {
	
	Optional<UserInfo> findByEmail(String email);

}
