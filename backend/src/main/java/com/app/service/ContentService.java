package com.app.service;

import java.util.List;

import com.app.dto.ContentDTO;

public interface ContentService {

	// get All Contents from specific Course (i.e.courseId)
	List<ContentDTO> getAllContentFromCourse(Long courseId);

	String deleteContent(Long contentId);

	String deleteSpecificContent(Long contentId, Long contentNo);

	// add new Content
	ContentDTO addContent(ContentDTO dto);

	ContentDTO updateContent(Long contentNo, ContentDTO dto);

	ContentDTO getContentDetails(Long courseId, Long contentId);

	// get all contents : pagination
	List<ContentDTO> getAllContents(int pageNumber, int pageSize);

}
