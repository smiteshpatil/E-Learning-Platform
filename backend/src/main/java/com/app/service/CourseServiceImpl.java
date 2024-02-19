package com.app.service;

import java.time.LocalDate;
import java.util.ArrayList;
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
import com.app.dao.FeedbackRepository;
import com.app.dao.InstructorRepository;
import com.app.dao.StudentRepository;
import com.app.dto.ContentDTO;
import com.app.dto.ContentDetailDTO;
import com.app.dto.CourseDTO;
import com.app.dto.CourseRespDTO;
import com.app.dto.GetAllDetailsDTO;
import com.app.dto.InstructorDTO;
import com.app.entities.Course;
import com.app.entities.CourseStudentDetails;
import com.app.entities.CourseStudentId;
import com.app.entities.Feedback;
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
	////////
	private final CourseStudentDetailsRepository courseStudentDetailsRepository;
	private final FeedbackRepository feedbackRepository;

	@Autowired
	public CourseServiceImpl(CourseStudentDetailsRepository courseStudentDetailsRepository,
			FeedbackRepository feedbackRepository, CourseRepository courseRepo) {
		this.courseStudentDetailsRepository = courseStudentDetailsRepository;
		this.feedbackRepository = feedbackRepository;
		this.courseRepo = courseRepo;
	}

	//////////
	@Autowired
	private ModelMapper mapper;

	@Override
	public List<CourseRespDTO> getAllCourses() {
		return courseRepo.findAll().stream().map(list -> mapper.map(list, CourseRespDTO.class))
				.collect(Collectors.toList());
	}

	@Override
	public List<GetAllDetailsDTO> getAllCoursesWithDetails() {
		List<Course> courses = courseRepo.findAll();
		List<GetAllDetailsDTO> allCourseDetails = new ArrayList<>();

		for (Course course : courses) {
			GetAllDetailsDTO courseDetails = new GetAllDetailsDTO();
			CourseDTO courseDTO = mapper.map(course, CourseDTO.class);
			courseDTO.setAverageRating(calculateAverageRating(course.getFeedbacks()));

			System.out.println(" in course serviceImpl- courseDTO: " + courseDTO + " ");
			courseDetails.setCourseDTO(courseDTO);
			courseDetails.setInstructorDTO(mapper.map(course.getInst(), InstructorDTO.class));
			List<ContentDetailDTO> contentDTOs = course.getContents().stream()
					.map(content -> mapper.map(content, ContentDetailDTO.class)).collect(Collectors.toList());
			courseDetails.setContentDTO(contentDTOs);
			allCourseDetails.add(courseDetails);
		}
		return allCourseDetails;
	}

	private Double calculateAverageRating(List<Feedback> feedbacks) {
		if (feedbacks.isEmpty()) {
			return 0.0;
		}

		double totalRating = 0;
		for (Feedback feedback : feedbacks) {
			totalRating += feedback.getRating();
		}
		System.out.println(" Avg rating: " + totalRating / feedbacks.size());
		return totalRating / feedbacks.size();
	}

	@Override
	public List<CourseRespDTO> getAllCoursesFromInstructor(Long instructorId) {
		List<Course> courseList = courseRepo.findByInstructorId(instructorId);
		return courseList.stream().map(course -> mapper.map(course, CourseRespDTO.class)).collect(Collectors.toList());
	}

	@Override
	public List<CourseRespDTO> getAllCourseByInstructorEmail(String email) {
		List<Course> list = courseRepo.findByInstEmail(email);
		return list.stream().map(course -> mapper.map(course, CourseRespDTO.class)).collect(Collectors.toList());
	}

	@Override
	public String deleteCourseDetails(Long courseId) {
		// long noOfStudentsInCourses = courseStudentRepo.deleteByMyCourseId(courseId);
		// System.out.println("deleted students " + noOfStudentsInCourses);

		Course course = courseRepo.findById(courseId)
				.orElseThrow(() -> new ResourceNotFoundException("Invalid Course id !!!"));
		courseRepo.delete(course);
		return "Course Deleted SuccessFully " + courseId + " " + course.getCourseName();
	}

	@Override
	public CourseRespDTO addNewCourse(CourseDTO dto) {

		Instructor inst = instRepo.findById(dto.getInstructorId())
				.orElseThrow(() -> new ResourceNotFoundException("Invalid Instructor id !!!"));

		// set up a bi dir relationship
		dto.setPublishedDate(LocalDate.now());
		Course course = mapper.map(dto, Course.class);

		inst.addCourse(course);
		return mapper.map(courseRepo.save(course), CourseRespDTO.class);
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
	public CourseRespDTO getCourseDetails(Long instructorId, Long courseId) {
		Course course = courseRepo.findById(courseId)
				.orElseThrow(() -> new ResourceNotFoundException("Invalid Course id !!!"));
		if (course.getInst().getId() != courseId)
			throw new ResourceNotFoundException("Instructor id does not match !!!");
		return mapper.map(course, CourseRespDTO.class);
	}

	@Override
	public List<CourseRespDTO> getAllCourses(int pageNumber, int pageSize) {
		// Creates a PageRequest(imple class of Pageable : i/f for pagination) based
		// upon page no n size
		Pageable pageable = PageRequest.of(pageNumber, pageSize);
		// fetches the Page of Courses --> getContent() --> List<Course>
		List<Course> courseList = courseRepo.findAll(pageable).getContent();
		return courseList.stream().map(course -> mapper.map(course, CourseRespDTO.class)).collect(Collectors.toList());
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
		return "Course " + course.getCourseName() + " assigned to Student " + student.getFirstName();
	}

	@Override
	public String removeStudentFromCourse(Long courseId, Long studentId) {
		CourseStudentId id = new CourseStudentId(courseId, studentId);
		courseStudentRepo.deleteById(id);
		return "Student Removed From Course " + courseId;
	}

	// Get all course Details from studentId
	@Override
	public List<CourseRespDTO> getAllCoursesFromStudent(Long studentId) {
		List<Course> courseList = courseStudentRepo.findByStudentId(studentId);
		return courseList.stream()
				.map(course -> {
					CourseRespDTO courseRespDTO = mapper.map(course, CourseRespDTO.class);
					// Get the course index from CourseStudentDetails and set it in the DTO
					for (CourseStudentDetails courseStudentDetails : course.getCourseStudentDetails()) {
						if (courseStudentDetails.getMyStudent().getId().equals(studentId)) {
							courseRespDTO.setCourseIndex(courseStudentDetails.getCourseIndex());
							break;
						}
					}
					return courseRespDTO;
				})
				.collect(Collectors.toList());
	}

	@Override
	public String assignStudentToMultipleCourses(String studentEmail, List<Long> courseIds) {
		Student student = studentRepo.findByEmail(studentEmail)
				.orElseThrow(() -> new ResourceNotFoundException("Invalid Student email: " + studentEmail));

		List<Course> courses = courseRepo.findAllById(courseIds);

		// To save the each mapping in the list
		List<CourseStudentDetails> courseStudDetails = new ArrayList<>();

		LocalDate enrollmentDate = LocalDate.now();

		for (Course course : courses) {
			CourseStudentDetails csDetails = new CourseStudentDetails();
			csDetails.setEnrolledDate(enrollmentDate);
			csDetails.setMyCourse(course);
			csDetails.setMyStudent(student);
			courseStudDetails.add(csDetails);
		}

		courseStudentRepo.saveAll(courseStudDetails);

		return "You have enrolled in all Courses";
	}

	///////////////

	// @Override
	// public int getTotalEnrolledStudents(Long courseId) {
	// return
	// courseStudentDetailsRepository.countByCourseStudentIdCourseId(courseId);
	// }
	//
	// @Override
	// public double getAverageRating(Long courseId) {
	// List<Integer> ratings = feedbackRepository.findRatingsByCourseId(courseId);
	// if (ratings.isEmpty()) {
	// return 0.0;
	// }
	// return ratings.stream().mapToInt(Integer::intValue).average().getAsDouble();
	// }
	//

}
