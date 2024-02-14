package com.app.controller;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.ContentDTO;
import com.app.service.ContentService;

import io.jsonwebtoken.io.IOException;

@RestController
@RequestMapping("/contents")
@CrossOrigin(origins = "http://localhost:3000")
public class ContentController {

	@Autowired
	private ContentService contentService;

	
	// add new Content to existing course
	@PostMapping("/add")
	public ResponseEntity<?> addNewContent(@RequestBody @Valid ContentDTO dto){
		System.out.println("In add Content " + dto);
		return ResponseEntity.status(HttpStatus.CREATED).body(contentService.addContent(dto));
	}

	// get all contents for specific course
	@GetMapping("/{courseId}")
	public ResponseEntity<?> getContentDetailsByCourseId(@PathVariable Long courseId) throws IOException {
		System.out.println("in GET contents y courseId " + courseId);
		return ResponseEntity.ok(contentService.getAllContentFromCourse(courseId));
	}
//
//	@GetMapping("/{courseId}/{contentId}") // courseId is just for validation
//	public ResponseEntity<?> getContentDetailsByCourseIdAndContentNo(@RequestBody @Valid ContentDTO dto) {
//
//		return null;
//	}

	@PutMapping("/update/{contentId}")
	public ResponseEntity<?> updateContent(@PathVariable Long contentId, @RequestBody @Valid ContentDTO dto) {
		System.out.println("In update content " + contentId);
		return ResponseEntity.ok(contentService.updateContent(contentId, dto));
	}
	
	
	@DeleteMapping("/delete/{contentId}")
	public ResponseEntity<?> deleteContent(@PathVariable Long contentId){
	System.out.println("In delete content " + contentId);
	return ResponseEntity.ok(contentService.deleteContent(contentId));
}
}

//public ResponseEntity<?> addNewContent(@RequestBody @Valid AddContentDTO dto){
//	
//	
//	return null;
//}