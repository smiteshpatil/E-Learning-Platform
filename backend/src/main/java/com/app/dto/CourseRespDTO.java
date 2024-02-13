package com.app.dto;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class CourseRespDTO {
	private Long id;
	private String courseName;
	private String category;
	private String description;
	private String skillLevel;
	private String language;
	private Long price;
}
