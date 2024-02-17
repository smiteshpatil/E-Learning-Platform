package com.app.service;

import com.app.dto.FeedbackDTO;

public interface FeedbackService {
	void addFeedback(FeedbackDTO feedbackDTO);

	void deleteFeedback(Long feedbackId, Long studentId);
	 

}
