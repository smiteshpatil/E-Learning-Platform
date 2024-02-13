package com.app.dto;

import java.time.LocalDate;

import javax.validation.constraints.NotNull;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class CourseStudent {
	@NotNull
	private Long courseId;
	@NotNull
	private Long studentId;
	private LocalDate enrolledDate;
}
