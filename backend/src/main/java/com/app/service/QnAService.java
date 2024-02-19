package com.app.service;

import java.util.List;

import com.app.dto.QnADTO;
import com.app.dto.QnAddDTO;

public interface QnAService {
	//get all questions with answers (APi for student)
	List<QnADTO> getAllQuestionAnswers(Long courseId);
	
	// Add Question (API for Student)
//	QnAddDTO addQuestion(QnAddDTO qnaDto, Long courseId);
	
    List<QnADTO> getAllUnansweredQuestions(Long courseId);
    
    String updateAnswer(Long questionId, String answer);
	
    
    ///////////Mayur ///////
    //void addQuestionToCourse(Long courseId, QnAddDTO qnAddDTO);
    public void addQuestionToCourse(Long courseId, QnAddDTO qnAddDTO);
	
}
