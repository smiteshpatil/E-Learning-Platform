package com.app.dto;

import java.time.LocalDate;

import javax.validation.constraints.NotBlank;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonProperty.Access;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class CourseDTO {
	@JsonProperty(access = Access.READ_ONLY)
	private Long id;
	@NotBlank
	private String courseName;
	private LocalDate enrolledDate;
	
	private String category;
	
	private String description;
	
	private String skillLevel;
	
	private String language;
	
	private Long price;
	
	private Long instructorId;
}
