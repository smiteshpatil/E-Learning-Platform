package com.app.service;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import javax.persistence.EntityNotFoundException;
import javax.transaction.Transactional;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.custom_exceptions.ResourceNotFoundException;
import com.app.dao.AdminRepository;
import com.app.dao.CourseRepository;
import com.app.dao.CourseStudentDetailsRepository;
import com.app.dao.FeedbackRepository;
import com.app.dao.InstructorRepository;
import com.app.dao.StudentCourseRepository; // Import StudentCourseRepository
import com.app.dto.AdminDTO;
import com.app.dto.CourseDTO;
import com.app.dto.CourseInstructorDto;
import com.app.dto.CourseRespDTO;
import com.app.dto.CourseStudent;
import com.app.dto.InstructorCoursesDTO;
import com.app.dto.InstructorDTO;
import com.app.dto.StudentDTO;
import com.app.entities.Admin;
import com.app.entities.Course;
import com.app.entities.CourseStudentDetails;
import com.app.entities.CourseStudentId;
import com.app.entities.Feedback;
import com.app.entities.Instructor;
import com.app.entities.Student;

@Service
@Transactional
<<<<<<< HEAD

public class AdminServiceImpl implements AdminService{
=======


public class AdminServiceImpl implements AdminService{


>>>>>>> 99b44bce319d92fa29189ab4ba57d48a138c99f7
    @Autowired
    private AdminRepository adminRepo;
    
    @Autowired
	private CourseRepository courseRepo;
    
    @Autowired
    private CourseService courseService; 

    @Autowired
    private FeedbackService feedbackService; 

    @Autowired
    private FeedbackRepository feedbackRepo;
    
    @Autowired
	private InstructorRepository instructorRepo ;

    @Autowired
    private StudentCourseRepository studentCourseRepository; 
    
    private final CourseStudentDetailsRepository courseStudentDetailsRepository;

    @Autowired
    public AdminServiceImpl(CourseStudentDetailsRepository courseStudentDetailsRepository) {
        this.courseStudentDetailsRepository = courseStudentDetailsRepository;
    }

    @Autowired
    private ModelMapper mapper;

    @Override
    public AdminDTO getAdminByEmail(String adminEmail) {
        Admin admin = adminRepo.findByEmail(adminEmail)
                .orElseThrow(()-> new ResourceNotFoundException("Invalid Email for ROLE_ADMIN"));
        return mapper.map(admin, AdminDTO.class);
    }

    @Override
    public int getTotalStudents() {
        return studentCourseRepository.getTotalStudentsEnrolledInCourses(); // Use StudentCourseRepository method
    }

    @Override
    public List<InstructorCoursesDTO> getInstructorsWithCourseInfo() {
        List<Instructor> instructors = instructorRepo.findAll(); // Fetch instructors from repository
        List<InstructorCoursesDTO> instructorDTOs = new ArrayList<>();

        for (Instructor instructor : instructors) {
            InstructorCoursesDTO instructorDTO = new InstructorCoursesDTO();
            instructorDTO.setEmail(instructor.getEmail());

            List<Course> courses = instructor.getCourses();
            List<String> courseNames = courses.stream().map(Course::getCourseName).collect(Collectors.toList());
            instructorDTO.setCourseNames(courseNames);

            List<LocalDate> publishedDates = courses.stream().map(Course::getPublishedDate).collect(Collectors.toList());
            instructorDTO.setPublishedDates(publishedDates);

            instructorDTOs.add(instructorDTO);
        }

        return instructorDTOs;
    }

    @Override
    public List<CourseRespDTO> getAllCourseDetails() {
        List<Course> courses = courseRepo.findAll();
        List<CourseRespDTO> courseDetailsList = new ArrayList<>();

        for (Course course : courses) {
        	CourseRespDTO courseDetails = new CourseRespDTO();
            courseDetails.setCourseName(course.getCourseName());
            courseDetails.setTotalEnrolledStudents(course.getCourseStudentDetails().size());
            courseDetails.setAverageRating(calculateAverageRating(course.getFeedbacks()));
            courseDetailsList.add(courseDetails);
        }

        return courseDetailsList;
    }

    // Method to calculate average rating
    private double calculateAverageRating(List<Feedback> feedbacks) {
        if (feedbacks.isEmpty()) {
            return 0.0;
        }

        double totalRating = 0;
        for (Feedback feedback : feedbacks) {
            totalRating += feedback.getRating();
        }

        return totalRating / feedbacks.size();
    }


    @Override
    public List<StudentDTO> getStudentDetailsByCourseId(Long courseId) {
        Course course = courseRepo.findById(courseId)
                .orElseThrow(() -> new IllegalArgumentException("Course not found with id: " + courseId));

        List<StudentDTO> studentDetailsList = new ArrayList<>();
        List<Feedback> feedbackList = feedbackRepo.findByCourse(course);

        for (Feedback feedback : feedbackList) {
            Student student = feedback.getStudent();
            StudentDTO studentDetailsDTO = new StudentDTO();
            studentDetailsDTO.setFirstName(student.getFirstName());
            studentDetailsDTO.setLastName(student.getLastName());
            studentDetailsDTO.setEmail(student.getEmail());
            studentDetailsDTO.setRating(feedback.getRating());
            studentDetailsList.add(studentDetailsDTO);
        }

        return studentDetailsList;
    }
    
    
//    @Override
//    public void revokeStudentFromCourse(CourseStudent revokeStudentDTO) {
//        // Find the CourseStudentDetails entity by courseId and studentId
//        courseStudentDetailsRepository.deleteByCourseStudentId_CourseIdAndCourseStudentId_StudentId(
//            revokeStudentDTO.getCourseId(), revokeStudentDTO.getStudentId());
//    }
    

    @Override
    public void deleteStudentFromCourse(Long courseId, Long studentId) {
        // Find the CourseStudentDetails entity by course ID and student ID
        Optional<CourseStudentDetails> courseStudentDetailsOptional = courseStudentDetailsRepository.findById(new CourseStudentId(courseId, studentId));
        if (courseStudentDetailsOptional.isPresent()) {
            courseStudentDetailsRepository.deleteById(new CourseStudentId(courseId, studentId));
        } else {
            throw new EntityNotFoundException("CourseStudentDetails not found for course ID " + courseId + " and student ID " + studentId);
        }
    }
    
    
}
