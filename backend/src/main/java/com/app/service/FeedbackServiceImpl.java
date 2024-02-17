package com.app.service;

import java.util.List;
import java.util.OptionalDouble;

import javax.persistence.EntityNotFoundException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.AccessDeniedException;
import org.springframework.stereotype.Service;

import com.app.dao.CourseRepository;
import com.app.dao.FeedbackRepository;
import com.app.dao.StudentRepository;
import com.app.dto.FeedbackDTO;
import com.app.entities.Feedback;

@Service
public class FeedbackServiceImpl implements FeedbackService {

	private final FeedbackRepository feedbackRepository;
	private final CourseRepository courseRepository;
	private final StudentRepository studentRepository;

	@Autowired
	public FeedbackServiceImpl(FeedbackRepository feedbackRepository, CourseRepository courseRepository,
			StudentRepository studentRepository) {
		this.feedbackRepository = feedbackRepository;
		this.courseRepository = courseRepository;
		this.studentRepository = studentRepository;
	}

	@Override
	public void addFeedback(FeedbackDTO feedbackDTO) {
		// Check if feedback already exists for the given student and course combination
		Feedback existingFeedback = feedbackRepository.findByStudentIdAndCourseId(feedbackDTO.getStudentId(),
				feedbackDTO.getCourseId());
		if (existingFeedback != null) {
			return;
		}
		Feedback feedback = new Feedback();
		// Set course and student based on DTO data
		feedback.setCourse(courseRepository.findById(feedbackDTO.getCourseId())
				.orElseThrow(() -> new IllegalArgumentException("Invalid course ID")));
		feedback.setStudent(studentRepository.findById(feedbackDTO.getStudentId())
				.orElseThrow(() -> new IllegalArgumentException("Invalid student ID")));
		feedback.setComment(feedbackDTO.getComment());
		feedback.setRating(feedbackDTO.getRating());
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

//	  @Override
//	    public double getAverageRating(Long courseId) {
//	        // Fetch ratings for the given course ID
//	        List<Integer> ratings = feedbackRepository.findRatingsByCourseId(courseId);
//
//	        // Calculate average rating
//	        OptionalDouble average = ratings.stream().mapToInt(Integer::intValue).average();
//	        return average.isPresent() ? average.getAsDouble() : 0.0; // Return average rating or 0 if list is empty
//	    }

}
