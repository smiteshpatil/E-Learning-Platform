package com.app.service;

import javax.transaction.Transactional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.app.dto.SignupRequest;
import com.app.entities.Instructor;
import com.app.entities.Student;
import com.app.repository.InstructorRepository;
import com.app.repository.StudentRepository;

@Service
@Transactional
public class SignupServiceServiceImpl implements SignupService {

	@Autowired
	private InstructorRepository instRepo;
	
	@Autowired
	private StudentRepository studentRepo;
	
	@Autowired
	private ModelMapper mapper;  
	
	@Autowired
	private PasswordEncoder encoder;
	
	@Override
	public SignupRequest registerNewInstructor(SignupRequest request) {
		request.setPassword(encoder.encode(request.getPassword()));
		Instructor persistentInstructor = instRepo.save(mapper.map(request, Instructor.class));
		return mapper.map(persistentInstructor, SignupRequest.class);
	}

	@Override
	public SignupRequest registerNewStudent(SignupRequest request) {
		request.setPassword(encoder.encode(request.getPassword()));
		Student persistentStudent = studentRepo.save(mapper.map(request, Student.class));
		return mapper.map(persistentStudent, SignupRequest.class);
	}

}
