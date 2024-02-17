package com.app.dto;

import java.util.List;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonProperty.Access;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class InstructorCoursesDTO {
	@JsonProperty(access = Access.READ_ONLY)
	private Long instructorId;
	@NotBlank
	private String firstName;
	@NotBlank
	private String lastName;
	@Email
	private String email;

	private String password;

	private String phoneNo;

	private String gender;

	private String imageUrl;

	List<CourseRespDTO> courses;
}
