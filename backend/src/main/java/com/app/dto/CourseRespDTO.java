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
<<<<<<< HEAD
    private Long id;
    private String courseName;
    private String category;
    @Lob
    private String description;
    private String skillLevel;
    private String language;
    private Long price;
    private LocalDate publishedDate;
//    private int totalEnrolledStudents;
//    private double avgRating;
    private int totalEnrolledStudents;
    private double averageRating;
    
=======
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
>>>>>>> 93a535c66278c45ae3e87791653cbcea8b5c99d0
}
