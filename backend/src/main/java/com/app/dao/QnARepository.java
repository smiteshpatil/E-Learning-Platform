package com.app.dao;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.app.entities.QnA;

@Repository
public interface QnARepository extends JpaRepository<QnA, Long> {
//	List<QnA> findById(Long id);
	List<QnA> findByCourseId(Long courseId);
    List<QnA> findByCourseIdAndAnswered(Long courseId, boolean answered);
    
}