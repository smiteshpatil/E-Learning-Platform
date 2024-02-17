package com.app.dao;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.entities.Content;

public interface ContentRepository extends JpaRepository<Content, Long> {

	// find by courseId
	List<Content> findByCourseId(Long courseId);

	Optional<Content> findByContentNo(Long contentNo);

}
