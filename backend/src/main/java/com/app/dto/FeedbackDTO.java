package com.app.dto;

import javax.validation.constraints.Min;
import javax.validation.constraints.Max;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@Getter
@Setter
public class FeedbackDTO {

	private String comment;

	@Min(0)
	@Max(5)
	private int rating;

	private Long courseId;

	private Long studentId;

}
