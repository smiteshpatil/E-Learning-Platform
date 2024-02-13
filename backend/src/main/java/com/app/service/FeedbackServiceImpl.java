package com.app.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.dto.FeedbackDTO;
import com.app.entities.Course;
import com.app.entities.Feedback;
import com.app.entities.Student;
import com.app.dao.CourseRepository;
import com.app.dao.FeedbackRepository;
import com.app.dao.StudentRepository;

@Service
public class FeedbackServiceImpl implements FeedbackService {
    
    private final FeedbackRepository feedbackRepository;
    private final CourseRepository courseRepository;
    private final StudentRepository studentRepository;

    @Autowired
    public FeedbackServiceImpl(FeedbackRepository feedbackRepository, 
                               CourseRepository courseRepository, 
                               StudentRepository studentRepository) {
        this.feedbackRepository = feedbackRepository;
        this.courseRepository = courseRepository;
        this.studentRepository = studentRepository;
    }

    @Override
    public void addFeedback(FeedbackDTO feedbackDTO) {
        Feedback feedback = new Feedback();
        feedback.setComment(feedbackDTO.getComment());
        feedback.setRating(feedbackDTO.getRating());

        Course course = courseRepository.findById(feedbackDTO.getCourseId())
                                         .orElseThrow(() -> new IllegalArgumentException("Invalid course ID"));
        feedback.setCourse(course);

        Student student = studentRepository.findById(feedbackDTO.getStudentId())
                                           .orElseThrow(() -> new IllegalArgumentException("Invalid student ID"));
        feedback.setStudent(student);

        feedbackRepository.save(feedback);
    }
}
