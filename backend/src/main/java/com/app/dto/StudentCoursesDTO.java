package com.app.dto;


import java.time.LocalDate;
import java.util.List;

import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import com.app.entities.Role;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonProperty.Access;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class StudentCoursesDTO {

    
    @Email
    private String email;
    

    
    // New fields
    private String courseName;
    private LocalDate enrolledDate;
    
    public StudentCoursesDTO(String email, String courseName, LocalDate enrolledDate) {
        this.email = email;
        this.courseName = courseName;
        this.enrolledDate = enrolledDate;
    }
}
