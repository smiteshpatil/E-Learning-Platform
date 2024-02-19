package com.app.dto;

import java.time.LocalDate;
import java.util.List;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;

import com.app.entities.Role;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonProperty.Access;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class InstructorDTO {
	@JsonProperty(access = Access.READ_ONLY)
	private Long id;

	@NotBlank
	private String firstName;

	@NotBlank
	private String lastName;

	@Email
	private String email;

	@JsonIgnore
	private String password;

	private String phoneNo;

	private String gender;

	private String imageUrl;

	private String LinkedInLink;

	private String GitHubLink;

	private String Heading;

	private List<String> courseNames; // List of course names associated with the instructor
	private List<LocalDate> publishedDates;

	private Role role;
}
