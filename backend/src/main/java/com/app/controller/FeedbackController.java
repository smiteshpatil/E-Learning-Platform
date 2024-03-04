package com.app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.FeedbackDTO;
import com.app.service.FeedbackService;

@RestController
@RequestMapping("/feedback")
@CrossOrigin(origins = {"http://localhost:3000","http://65.1.87.251/","http://65.1.87.251/80" ,"http://e-learning-platform.online/","http://e-learning-platform.online/80",})
public class FeedbackController {

	@Autowired 
	private FeedbackService feedbackService;


	@PostMapping("/add")
	public ResponseEntity<String> addFeedback(@RequestBody FeedbackDTO feedbackDTO) {
		feedbackService.addFeedback(feedbackDTO);
		return new ResponseEntity<>("Feedback created successfully", HttpStatus.CREATED);
	}

	// id ==feedback id
	@DeleteMapping("/{id}/{studentId}")
	public ResponseEntity<String> deleteFeedback(@PathVariable Long id, @PathVariable Long studentId) {
		// Call service method to delete feedback
		feedbackService.deleteFeedback(id, studentId);
		return new ResponseEntity<>("Feedback deleted successfully", HttpStatus.OK);
	}
}
