package com.app.dao;

import com.app.entities.Course;
import com.app.entities.Feedback;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface FeedbackRepository extends JpaRepository<Feedback, Long> {
<<<<<<< HEAD

    // Custom method to find feedback by course ID
    List<Feedback> findByCourseId(Long courseId);

    
    Feedback findByStudentIdAndCourseId(Long studentId, Long courseId);
    
    List<Feedback> findByCourse(Course course);
=======
	// Custom method to find feedback by course ID
	List<Feedback> findByCourseId(Long courseId);
>>>>>>> 93a535c66278c45ae3e87791653cbcea8b5c99d0


<<<<<<< HEAD
=======
	// Feedback findByStudentIdAndCourseId(Long studentId, Long courseId);
>>>>>>> 93a535c66278c45ae3e87791653cbcea8b5c99d0
}
