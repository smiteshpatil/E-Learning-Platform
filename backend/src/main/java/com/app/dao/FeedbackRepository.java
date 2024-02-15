package com.app.dao;

import com.app.entities.Feedback;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface FeedbackRepository extends JpaRepository<Feedback, Long> {
	// Custom method to find feedback by course ID
	List<Feedback> findByCourseId(Long courseId);

	Feedback findByStudentIdAndCourseId(Long studentId, Long courseId);

	// Feedback findByStudentIdAndCourseId(Long studentId, Long courseId);
}