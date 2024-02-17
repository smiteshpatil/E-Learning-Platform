package com.app.dto;

import java.time.LocalDate;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class CourseInstructorDto {
    private String courseName;
    private LocalDate publishedDate;
    private String instructorEmail;
    
}
