package com.app.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import javax.validation.constraints.Min;
import javax.validation.constraints.Max;

@Entity
@Table(name = "course_feedback")
@NoArgsConstructor
@Getter
@Setter
public class Feedback extends BaseEntity {

	@Column(name = "comments")
	private String comment;

	@Min(0)
	@Max(5)
	private int rating;

	@ManyToOne
	@JoinColumn(name = "course_id")
	private Course course;

	@ManyToOne
	@JoinColumn(name = "student_id")
	private Student student;

}
