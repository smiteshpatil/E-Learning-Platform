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
<<<<<<< HEAD
=======
	@JsonProperty(access = Access.READ_ONLY)
	private Long id;
	@NotBlank
	private String firstName;
	@NotBlank
	private String lastName;
	@Email
	private String email;

	private String password;
>>>>>>> 6c5b6cf8bf80253ab46d3438568305d632b36751

    
    @Email
    private String email;
    

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
	private String gender;

	private String imageUrl;

	@Enumerated(EnumType.STRING)
	private Role role;

	private List<CourseDTO> courses;
>>>>>>> 6c5b6cf8bf80253ab46d3438568305d632b36751
}
