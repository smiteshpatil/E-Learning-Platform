package com.app.dto;

import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class GetAllDetailsDTO {
	private InstructorDTO instructorDTO;
	private CourseDTO courseDTO;
	private List<ContentDetailDTO> contentDTO;
}
