package com.app.dto;

import javax.persistence.Column;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Pattern;
import javax.validation.constraints.Size;

import com.app.entities.Role;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonProperty.Access;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class Signup {
	@JsonProperty(access = Access.READ_ONLY) // this property only used during ser.
	private Long id;
	@NotBlank(message = "First Name required")
	private String firstName;
	private String lastName;
	@NotBlank(message = "Email is required")
	@Email(message = "Invalid email format")
	private String email;
	@JsonProperty(access = Access.WRITE_ONLY)
	@NotBlank(message = "Password is required")
	@Size(min = 8, message = "Password must be at least 8 characters")
	@Pattern(regexp = "^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=])(?=\\S+$).{8,}$", message = "Password must contain at least one digit, one uppercase letter, one lowercase letter, one special character, and no whitespace")
	private String password;
	@Pattern(regexp = "\\d{10}", message = "Phone number must be 10 digits")
	@Column(length = 10)
	private String phoneNo;
	private String gender;
	private Role role;

	public Signup(String firstName, String lastName, String email, String password, String phoneNo, String gender,
			Role role) {
		super();
		this.firstName = firstName;
		this.lastName = lastName;
		this.email = email;
		this.password = password;
		this.phoneNo = phoneNo;
		this.gender = gender;
		this.role = role;
	}

}
