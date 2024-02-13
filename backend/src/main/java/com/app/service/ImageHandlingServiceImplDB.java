package com.app.service;

import java.io.IOException;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.app.custom_exceptions.ResourceNotFoundException;
import com.app.dao.InstructorRepository;
import com.app.dto.ApiResponse;
import com.app.entities.Instructor;

@Service("image_db")
@Transactional
public class ImageHandlingServiceImplDB implements ImageHandlingService {

	@Autowired
	private InstructorRepository instRepo;
	
	
	@Override
	public ApiResponse uploadImage(Long instructorId, MultipartFile image) throws IOException {
		//get instructor by instructorId
		Instructor inst = instRepo.findById(instructorId).orElseThrow(() -> 
		new ResourceNotFoundException("Invalid Instructor ID!!!!"));
		// instructor found --> PERSISTENT
		// to store the img directly in DB as a BLOB
		inst.setImage(image.getBytes());
		return new ApiResponse("Image file uploaded successfully for Instructor id " + instructorId);
	}

	@Override
	public byte[] downloadImage(Long instructorId) throws IOException {
		////get instructor by instructorId
		Instructor inst = instRepo.findById(instructorId).orElseThrow(() -> 
		new ResourceNotFoundException("Invalid Instructor ID!!!!"));
		// instructor found --> PERSISTENT
		return inst.getImage();
	}

}
