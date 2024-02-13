package com.app.service;

import java.util.List;
import java.util.stream.Collectors;


import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.custom_exceptions.ResourceNotFoundException;
import com.app.dao.CourseRepository;
import com.app.dao.StudentRepository;
import com.app.dto.CourseRespDTO;
import com.app.dto.StudentCoursesDTO;
import com.app.dto.StudentDTO;
import com.app.entities.Course;
import com.app.entities.Student;

@Service
@Transactional
public class StudentServiceImpl implements StudentService {

	@Autowired
	private StudentRepository studentRepo;
	
	@Autowired
	private CourseRepository courseRepo;

	@Autowired
	private ModelMapper mapper;

	@Override
	public List<StudentDTO> getAllStudents() {
		return studentRepo.findAll().stream().map(students -> mapper.map(students, StudentDTO.class))
				.collect(Collectors.toList());
	}

	@Override
	public StudentDTO getStudentDetails(Long studentId) {
		return mapper.map(studentRepo.findById(studentId)
				.orElseThrow(() -> new ResourceNotFoundException("Invalid Student Id !!!!")), StudentDTO.class);
	}
	
	@Override
	public StudentDTO getStudentDetails(String studentEmail) {
		return mapper.map(studentRepo.findByEmail(studentEmail)
				.orElseThrow(() -> new ResourceNotFoundException("Invalid Student Id !!!!")), StudentDTO.class);
	}

	@Override
	public StudentDTO updateStudent(Long studentId, StudentDTO dto) {
		Student student = studentRepo.findById(studentId)
				.orElseThrow(() -> new ResourceNotFoundException("Invalid Student Id !!!!"));
		mapper.map(dto, student);
		studentRepo.save(student);
		dto.setId(studentId);
		return dto;
	}

	@Override
	public String deleteStudent(Long studentId) {
		Student student = studentRepo.findById(studentId)
				.orElseThrow(() -> new ResourceNotFoundException("Invalid Student Id !!!!"));
		studentRepo.delete(student);
		return "Student Deleted SuccesFully " + student.getFirstName();
	}

	@Override
	public StudentCoursesDTO getStudentAndCoursesDetails(Long studentId) {
		// TODO Auto-generated method stub
		return null;
	}

//	@Override
//	public StudentCoursesDTO getStudentAndCoursesDetails(Long studentId) {
//		Student student = studentRepo.findById(studentId)
//				.orElseThrow(() -> new ResourceNotFoundException("Invalid Student Id !!!!"));
//	List<Course> list = courseRepo.findByStudentId(studentId);
//		return mapper.map(list, StudentCoursesDTO.class);
//	}



}
