package com.app.dto;

import javax.validation.constraints.NotBlank;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonProperty.Access;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class QnADTO {
	@JsonProperty(access = Access.READ_ONLY)
	private Long id;
    private Long courseId;
//     @NotBlank
    private String question;
    private String answer;
    private boolean answered; 
}
 