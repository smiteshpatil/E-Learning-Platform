package com.app.dao;

import com.app.entities.Feedback;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface FeedbackRepository extends JpaRepository<Feedback, Long> {
    // Custom method to find feedback by course ID
    List<Feedback> findByCourseId(Long courseId);
<<<<<<< HEAD
    Feedback findByStudentIdAndCourseId(Long studentId, Long courseId);
    
=======
    
    Feedback findByStudentIdAndCourseId(Long studentId, Long courseId);
>>>>>>> 71a61f96e647c463868801b054f1357ff6b64b14
}
