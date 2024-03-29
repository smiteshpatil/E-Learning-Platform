package com.app.dto;

import java.time.LocalDate;

import javax.persistence.Lob;

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
	@Lob
	private String description;
	private String skillLevel;
	private String language;
	private Long price;
	private LocalDate publishedDate;
	private String imageUrl;
}
