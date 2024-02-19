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

=======
>>>>>>> 93ef8da388422d86a0b3f93b2e6cec72e36452d4
    private Long id;
    private String courseName;
    private String category;
    @Lob
    private String description;
    private String imageUrl;
    private String skillLevel;
    private String language;
    private Long price;
    private LocalDate publishedDate;
    // private int totalEnrolledStudents;
    // private double avgRating;
    private int totalEnrolledStudents;
    private double averageRating;

<<<<<<< HEAD

=======
>>>>>>> 93ef8da388422d86a0b3f93b2e6cec72e36452d4
}
