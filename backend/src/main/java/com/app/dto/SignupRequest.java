package com.app.dto;

import com.app.entities.Role;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonProperty.Access;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class SignupRequest {
	@JsonProperty(access = Access.READ_ONLY)
	private Long id;
	private String firstName;
	private String lastName;
	private String email;
	private String password;
	private String phoneNo;
	private String gender;
	private Role role;
}
