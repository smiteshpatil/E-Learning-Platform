package com.app.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonProperty.Access;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class ContentDTO {
	@JsonProperty(access = Access.READ_ONLY) // used during serialization
	private Long id;
	private Long contentNo;
	private String contentName;
	private String contentDescription;
	private String contentUrl;
	@JsonProperty(access = Access.WRITE_ONLY)
	private Long courseId;
}
