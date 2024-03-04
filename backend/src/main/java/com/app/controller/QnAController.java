package com.app.controller;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.QnADTO;
import com.app.dto.QnAddDTO;
import com.app.service.QnAService;



@RestController
@RequestMapping("/qna")
@CrossOrigin(origins = {"http://localhost:3000","http://65.1.87.251/","http://65.1.87.251/80" ,"http://e-learning-platform.online/","http://e-learning-platform.online/80",})
public class QnAController {

	@Autowired
	private QnAService qnaService;

	@GetMapping("/{courseId}")
	public ResponseEntity<?> getAllQuestionAndAnswer(@PathVariable Long courseId) {
		return ResponseEntity.ok(qnaService.getAllQuestionAnswers(courseId));
	}

	@PostMapping("/add/{courseId}")
    public ResponseEntity<String> addQuestionToCourse(@PathVariable Long courseId, @RequestBody QnAddDTO qnAddDTO) {
		qnaService.addQuestionToCourse(courseId, qnAddDTO);
        return ResponseEntity.ok("Question added successfully");
    }
	
	@GetMapping("/unanswered/{courseId}")
	public ResponseEntity<List<QnADTO>> getAllUnansweredQuestions(@PathVariable Long courseId) {
		List<QnADTO> unansweredQuestions = qnaService.getAllUnansweredQuestions(courseId);
		return ResponseEntity.ok(unansweredQuestions);
	}

	@PutMapping("/answer/{questionId}")
	public ResponseEntity<String> updateAnswer(@PathVariable Long questionId, @RequestBody String answer) {
		String message = qnaService.updateAnswer(questionId, answer);
		return ResponseEntity.ok(message);
	}
	

}
