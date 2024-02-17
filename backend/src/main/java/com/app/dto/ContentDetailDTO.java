package com.app.dto;

import javax.persistence.Lob;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonProperty.Access;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class ContentDetailDTO {
	@JsonProperty(access = Access.READ_ONLY) // used during serialization
	private Long id;
	private Long contentNo;
	private String contentName;
	@Lob
	private String contentDescription;
	@JsonProperty(access = Access.WRITE_ONLY)
	private Long courseId;
}
