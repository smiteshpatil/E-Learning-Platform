package com.app.dto;

import java.time.LocalDate;
import java.util.List;

import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import com.app.entities.Role;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonProperty.Access;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class StudentCoursesDTO {

	@JsonProperty(access = Access.READ_ONLY)
	private Long id;
	@NotBlank
	private String firstName;
	@NotBlank
	private String lastName;
	@Email
	private String email;

	private String password;
<<<<<<< HEAD

	// New fields
	private String courseName;
	private LocalDate enrolledDate;

	public StudentCoursesDTO(String email, String courseName, LocalDate enrolledDate) {
		this.email = email;
		this.courseName = courseName;
		this.enrolledDate = enrolledDate;
	}
=======
    
    // New fields
    private String courseName;
    private LocalDate enrolledDate;
    
    public StudentCoursesDTO(String email, String courseName, LocalDate enrolledDate) {
        this.email = email;
        this.courseName = courseName;
        this.enrolledDate = enrolledDate;
    }
>>>>>>> 3c48af7a2c1ae48f626a895c25291cb3afbbfa85

	private String gender;

	private String imageUrl;

	@Enumerated(EnumType.STRING)
	private Role role;

	private List<CourseDTO> courses;
<<<<<<< HEAD
=======


>>>>>>> 3c48af7a2c1ae48f626a895c25291cb3afbbfa85
}
