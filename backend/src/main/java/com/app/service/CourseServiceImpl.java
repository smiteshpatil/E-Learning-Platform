package com.app.service;

import java.time.LocalDate;
import java.util.List;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.custom_exceptions.ResourceNotFoundException;
import com.app.dao.CourseRepository;
import com.app.dao.CourseStudentDetailsRepository;
import com.app.dao.InstructorRepository;
import com.app.dao.StudentRepository;
import com.app.dto.CourseDTO;
import com.app.dto.CourseRespDTO;
import com.app.entities.Course;
import com.app.entities.CourseStudentDetails;
import com.app.entities.Instructor;
import com.app.entities.Student;
@Service
@Transactional
public class CourseServiceImpl implements CourseService {

	@Autowired
	private CourseRepository courseRepo;
	
	@Autowired
	private InstructorRepository instRepo;
	
	@Autowired
	private StudentRepository studentRepo;
	
	@Autowired
	private CourseStudentDetailsRepository courseStudentRepo;
	
	@Autowired
	private ModelMapper mapper;
	
	@Override
	public List<CourseRespDTO> getAllCoursesFromInstructor(Long instructorId) {
		List<Course> courseList = courseRepo.findByInstructorId(instructorId);
		return courseList.stream()
				.map(course -> mapper.map(course, CourseRespDTO.class))
				.collect(Collectors.toList());
	}

	@Override
	public String deleteCourseDetails(Long courseId) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public CourseRespDTO addNewCourse(CourseDTO dto) {
		
		Instructor inst = instRepo.findById(dto.getInstructorId())
				.orElseThrow(() -> new ResourceNotFoundException("Invalid Instructor id !!!"));
		
		// set up a bi dir relationship
		Course course = mapper.map(dto, Course.class);
		
		inst.addCourse(course);
		return mapper.map(courseRepo.save(course),CourseRespDTO.class);
	}

	@Override
	public CourseRespDTO updateCourse(Long courseId, CourseDTO dto) {
		Course course = courseRepo.findById(courseId)
				.orElseThrow(() -> new ResourceNotFoundException("Invalid Course id !!!"));
		Instructor inst = instRepo.findById(dto.getInstructorId())
				.orElseThrow(() -> new ResourceNotFoundException("Invalid Instructor id !!!"));
		
		mapper.map(dto, course);
		course.setId(courseId);
		
		inst.addCourse(course);
		return mapper.map(course, CourseRespDTO.class);
	}

	@Override
	public CourseRespDTO getCourseDetails( Long instructorId, Long courseId) {
		Course course = courseRepo.findById(courseId)
				.orElseThrow(() -> new ResourceNotFoundException("Invalid Course id !!!"));
		if(course.getInst().getId() != courseId)
			throw new ResourceNotFoundException("Instructor id does not match !!!");
		return mapper.map(course, CourseRespDTO.class);
	}

	@Override
	public List<CourseRespDTO> getAllCourses(int pageNumber, int pageSize) {
		//Creates a PageRequest(imple class of Pageable : i/f for pagination) based upon page no n size
				Pageable pageable = PageRequest.of(pageNumber, pageSize);
				//fetches the Page of Courses --> getContent() --> List<Course>
				List<Course> courseList = courseRepo.findAll(pageable).getContent();
				return courseList.stream()
						.map(course-> mapper.map(course, CourseRespDTO.class))
						.collect(Collectors.toList());
	}

	@Override
	public String assignStudentToCourse(Long courseId, Long studentId) {
		Course course = courseRepo.findById(courseId)
				.orElseThrow(() -> new ResourceNotFoundException("Invalid Course id !!!"));
		Student student = studentRepo.getReferenceById(studentId);
		CourseStudentDetails details = new CourseStudentDetails();
		details.setEnrolledDate(LocalDate.now());
		details.setMyStudent(student);
		details.setMyCourse(course);
		courseStudentRepo.save(details);
		return "Course " + course.getCourseName()+ " assigned to Student " + student.getFirstName();
	}

	@Override
	public String removeStudentFromCourse(Long courseId, Long studentId) {
		
		return null;
	}

	@Override
	public List<CourseRespDTO> getAllCoursesFromStudent(Long studentId) {
		// TODO Auto-generated method stub
		return null;
	}

}
