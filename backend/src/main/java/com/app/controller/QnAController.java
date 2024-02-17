package com.app.controller;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.QnADTO;
import com.app.dto.QnAddDTO;
import com.app.service.QnAService;

import io.swagger.v3.oas.annotations.parameters.RequestBody;

@RestController
@RequestMapping("/qna")
@CrossOrigin(origins = "http://localhost:3000")
public class QnAController {

	@Autowired
	private QnAService qnaService;

	@GetMapping("/{courseId}")
	public ResponseEntity<?> getAllQuestionAndAnswer(@PathVariable Long courseId) {
		return ResponseEntity.ok(qnaService.getAllQuestionAnswers(courseId));
	}

//	@PostMapping("/add")
//	public ResponseEntity<String> addQuestion(@RequestBody QnADTO qnaDto) {
//		System.out.println("in addQuestionController"+ qnaDto);
//		String message = qnaService.addQuestion(qnaDto);
//		return ResponseEntity.status(HttpStatus.CREATED).body(message);
//	}
	@PostMapping("/add  /{courseId}")
	public ResponseEntity<QnAddDTO> addQuestion(@PathVariable Long courseId,@RequestBody @Valid QnAddDTO questionDTO) {
		System.out.println("in addQuestionController"+ questionDTO.getQuestion()+questionDTO.getCourseId()+" "+courseId);
	    if (questionDTO == null || questionDTO.getQuestion() == null || questionDTO.getQuestion().isEmpty()) {
	        return ResponseEntity.badRequest().body(questionDTO);
	    }
	    QnAddDTO result = qnaService.addQuestion(questionDTO, courseId);
	    return ResponseEntity.ok(result);
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
