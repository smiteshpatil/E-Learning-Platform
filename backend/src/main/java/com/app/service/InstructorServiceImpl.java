package com.app.service;

import java.util.List;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.custom_exceptions.ResourceNotFoundException;
import com.app.dao.InstructorRepository;
import com.app.dto.InstructorCoursesDTO;
import com.app.dto.InstructorDTO;
import com.app.entities.Instructor;

@Service
@Transactional
public class InstructorServiceImpl implements InstructorService {

	@Autowired
	private InstructorRepository instructorRepo;

	@Autowired
	private ModelMapper mapper;

	@Override
	public List<InstructorDTO> getAllInstructors() {
		return instructorRepo.findAll().stream().map(inst -> mapper.map(inst, InstructorDTO.class))
				.collect(Collectors.toList());
	}

	@Override
	public InstructorDTO getInstructorDetails(Long instructorId) {
		Instructor inst = instructorRepo.findById(instructorId)
				.orElseThrow(() -> new ResourceNotFoundException("Invalid Instructor Id !!!!"));
		return mapper.map(inst, InstructorDTO.class);
	}

	@Override
	public InstructorDTO getInstructorDetails(String instructorEmail) {
		Instructor inst = instructorRepo.findByEmail(instructorEmail)
				.orElseThrow(() -> new ResourceNotFoundException("Invalid Instructor Email !!!!"));
		return mapper.map(inst, InstructorDTO.class);
	}

	@Override
	public InstructorDTO addNewInstructor(InstructorDTO inst) {
		Instructor instEntity = mapper.map(inst, Instructor.class);
		Instructor persistentInst = instructorRepo.save(instEntity);
		return mapper.map(persistentInst, InstructorDTO.class);
	}

	@Override
	public InstructorCoursesDTO getInstructorAndCourseDetails(Long instructorId) {
		Instructor inst = instructorRepo.getInstructorAndCourseDetails(instructorId);
		return mapper.map(inst, InstructorCoursesDTO.class);
	}

}
