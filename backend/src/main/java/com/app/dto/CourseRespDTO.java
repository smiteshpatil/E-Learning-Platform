package com.app.dto;

import java.time.LocalDate;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class CourseRespDTO {
	private Long courseId;
	private String courseName;
	private LocalDate enrolledDate;
	private String category;
	private String description;
	private String skillLevel;
	private String language;
}
