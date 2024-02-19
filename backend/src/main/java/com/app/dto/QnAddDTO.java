package com.app.dto;
//
//import javax.validation.constraints.NotBlank;
//
//import lombok.AllArgsConstructor;
//import lombok.Getter;
//import lombok.NoArgsConstructor;
//import lombok.Setter;
//import lombok.ToString;
//
//@AllArgsConstructor
//@NoArgsConstructor
//@Getter
//@Setter
//@ToString
//public class QnAddDTO {
//    private Long courseId;
//    //@NotBlank
//    
//    private String question;
//    private boolean status;
//}

import javax.validation.constraints.NotBlank;

////////////

import lombok.*;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@ToString
public class QnAddDTO 
{
    private Long courseId;
    @NotBlank
    private String question;
    private boolean answered;
    private String answer;
    
}
