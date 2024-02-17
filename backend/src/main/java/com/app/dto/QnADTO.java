package com.app.dto;

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
    private String question;
    private String answer;
    private boolean answered; 
}
 