package com.app.dto;

import java.time.LocalDate;
import java.util.List;

import javax.persistence.Lob;
import javax.validation.constraints.Max;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotBlank;

import com.app.entities.Feedback;
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

	private String category;
	@Lob
	private String description;

	private String skillLevel;

	private String language;

	private Long price;

	private LocalDate publishedDate;

	@Lob
	private byte[] coursePoster;

	private Long instructorId;
	
	@Min(0)
    @Max(5)
    private Double averageRating; 
    
}
