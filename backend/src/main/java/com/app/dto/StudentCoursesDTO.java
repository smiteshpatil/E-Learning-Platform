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

    
    // New fields
    private String courseName;
    private LocalDate enrolledDate;
    
    public StudentCoursesDTO(String email, String courseName, LocalDate enrolledDate) {
        this.email = email;
        this.courseName = courseName;
        this.enrolledDate = enrolledDate;
    }
<<<<<<< HEAD
=======

>>>>>>> 99b44bce319d92fa29189ab4ba57d48a138c99f7
	private String gender;

	private String imageUrl;

	@Enumerated(EnumType.STRING)
	private Role role;

	private List<CourseDTO> courses;
<<<<<<< HEAD
=======

>>>>>>> 99b44bce319d92fa29189ab4ba57d48a138c99f7
}
