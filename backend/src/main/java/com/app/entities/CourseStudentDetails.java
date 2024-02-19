package com.app.entities;

import java.time.LocalDate;

import javax.persistence.CascadeType;
import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.MapsId;
import javax.persistence.Table;

import org.springframework.format.annotation.DateTimeFormat;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "student_courses")
@NoArgsConstructor
@Getter
@Setter
public class CourseStudentDetails {
	@EmbeddedId
	private CourseStudentId courseStudentId = new CourseStudentId();

	private int courseIndex;
	
	@DateTimeFormat(pattern = "yyyy-MM-dd")
	private LocalDate enrolledDate;

	@ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.MERGE)
	@MapsId("courseId") // shared PK approach
	@JoinColumn(name = "course_id")
	private Course myCourse;

	@ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.MERGE)
	@MapsId("studentId") // shared PK approach
	@JoinColumn(name = "student_id")
	private Student myStudent;

	private String orderId;

	private String amount;

	private String receipt;

	private String status;

	private String paymentId;

	public CourseStudentDetails(CourseStudentId courseStudentId) {
		super();
		this.courseStudentId = courseStudentId;
	}

}
