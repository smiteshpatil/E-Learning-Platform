package com.app.service;

import java.util.List;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.custom_exceptions.ResourceNotFoundException;
import com.app.dao.ContentRepository;
import com.app.dao.CourseRepository;
import com.app.dto.ContentDTO;
import com.app.entities.Content;
import com.app.entities.Course;

@Service
@Transactional
public class ContentServiceImpl implements ContentService {

	@Autowired
	private ContentRepository contentRepo;
	
	@Autowired
	private CourseRepository courseRepo;
	
	@Autowired
	private ModelMapper mapper;
	
	@Override
	public List<ContentDTO> getAllContentFromCourse(Long courseId) {
		List<Content> contentList = contentRepo.findByCourseId(courseId);
		return contentList.stream().map(content-> mapper.map(content, ContentDTO.class)).collect(Collectors.toList());
	}

	@Override
	public String deleteContent(Long contentId) {
		Content content = contentRepo.findById(contentId).orElseThrow(() -> new ResourceNotFoundException("Invalid Content id"));
		contentRepo.delete(content);
		return "Content deleted SuccessFully";
	}

	@Override
	public String deleteSpecificContent(Long contentId,Long contentNo) {
		Content content = contentRepo.findById(contentId).orElseThrow(() -> new ResourceNotFoundException("Invalid Content id"));
		if(content.getContentNo() == contentNo) {

		}
		return null;
	}

	@Override
	public ContentDTO addContent(ContentDTO dto) {
		Course course = courseRepo.findById(dto.getCourseId()).orElseThrow(() -> new ResourceNotFoundException("Invalid Course id"));
				
		Content contentEntity = mapper.map(dto, Content.class);
		course.addContent(contentEntity);
		
		Content savedContent = contentRepo.save(contentEntity);
		System.out.println("Content entity id : " + contentEntity.getId() + " " + savedContent.getId());
		return mapper.map(savedContent, ContentDTO.class);
	}

	@Override
	public ContentDTO updateContent(Long contentId, ContentDTO dto) {
		Content content = contentRepo.findById(contentId).orElseThrow(() -> new ResourceNotFoundException("Invalid Content id"));
		Course course = courseRepo.findById(dto.getCourseId()).orElseThrow(() -> new ResourceNotFoundException("Invalid Course id"));
		mapper.map(dto, content);
		System.out.println("After Mapping " + content);
		course.addContent(content);
		dto.setId(contentId);
		return dto;
	}

	@Override
	public ContentDTO getContentDetails(Long courseId, Long contentId) {
		Content content = contentRepo.findById(contentId).orElseThrow(() -> new ResourceNotFoundException("Invalid Content id"));
		if(content.getCourse().getId() != courseId)
			throw new ResourceNotFoundException("Course id does not match !!!");

		return mapper.map(content, ContentDTO.class);
	}

	@Override
	public List<ContentDTO> getAllContents(int pageNumber, int pageSize) {
		Pageable pageable = PageRequest.of(pageNumber, pageSize);
		List<Content> contentList = contentRepo.findAll(pageable).getContent();
				
		return contentList.stream().map(content -> mapper.map(content, ContentDTO.class))
				.collect(Collectors.toList());
	}

}
