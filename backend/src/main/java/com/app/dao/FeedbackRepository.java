package com.app.dao;

import com.app.entities.Course;
import com.app.entities.Feedback;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface FeedbackRepository extends JpaRepository<Feedback, Long> {

<<<<<<< HEAD
=======


>>>>>>> 3c48af7a2c1ae48f626a895c25291cb3afbbfa85
    // Custom method to find feedback by course ID
    List<Feedback> findByCourseId(Long courseId);

    Feedback findByStudentIdAndCourseId(Long studentId, Long courseId);

    List<Feedback> findByCourse(Course course);

<<<<<<< HEAD
    // Feedback findByStudentIdAndCourseId(Long studentId, Long courseId);

=======
>>>>>>> 3c48af7a2c1ae48f626a895c25291cb3afbbfa85
}
