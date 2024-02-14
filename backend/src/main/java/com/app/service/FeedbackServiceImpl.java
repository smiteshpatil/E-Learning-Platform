package com.app.service;

import javax.persistence.EntityNotFoundException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.AccessDeniedException;
import org.springframework.stereotype.Service;

import com.app.dto.FeedbackDTO;
import com.app.entities.Feedback;
import com.app.dao.CourseRepository;
import com.app.dao.FeedbackRepository;
import com.app.dao.StudentRepository;

@Service
public class FeedbackServiceImpl implements FeedbackService 
{
    
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
<<<<<<< HEAD
    public void addFeedback(FeedbackDTO feedbackDTO) 
    {
=======
    public void addFeedback(FeedbackDTO feedbackDTO) {
>>>>>>> 71a61f96e647c463868801b054f1357ff6b64b14
        // Check if feedback already exists for the given student and course combination
        Feedback existingFeedback = feedbackRepository.findByStudentIdAndCourseId(feedbackDTO.getStudentId(), feedbackDTO.getCourseId());
        if (existingFeedback != null) {
            // Feedback already exists, you can throw an exception or handle it as per your requirement
            // For now, let's just return
            return;
        }

        Feedback feedback = new Feedback();
        feedback.setComment(feedbackDTO.getComment());
        feedback.setRating(feedbackDTO.getRating());

        // Set course and student based on DTO data
        feedback.setCourse(courseRepository.findById(feedbackDTO.getCourseId())
                                            .orElseThrow(() -> new IllegalArgumentException("Invalid course ID")));
        feedback.setStudent(studentRepository.findById(feedbackDTO.getStudentId())
                                              .orElseThrow(() -> new IllegalArgumentException("Invalid student ID")));

        feedbackRepository.save(feedback);
    }
    @Override
    public void deleteFeedback(Long feedbackId, Long studentId) {
        // Check if the feedback belongs to the requesting student
        Feedback feedback = feedbackRepository.findById(feedbackId)
                .orElseThrow(() -> new EntityNotFoundException("Feedback not found"));
        if (!feedback.getStudent().getId().equals(studentId)) {
            throw new AccessDeniedException("You are not authorized to delete this feedback");
        }
        
        feedbackRepository.deleteById(feedbackId);
    }


}
