package com.app.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.entities.CartItem;

public interface CartItemRepository extends JpaRepository<CartItem, Long>{
	//@Query("SELECT c FROM CartItem c WHERE c.student.id = :studentId")
	List<CartItem> findByStudentId(Long StudentId);
}
