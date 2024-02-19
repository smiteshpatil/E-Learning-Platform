package com.app.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.Lob;
import javax.persistence.Table;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Pattern;
import javax.validation.constraints.Size;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name = "admin")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@ToString(exclude = "password")
public class Admin extends BaseEntity {
	@NotBlank(message = "First name is required")
	@Size(max = 20, message = "First name must be at most 20 characters")
	@Column(length = 20)
	private String firstName;

	@Size(max = 20, message = "Last name must be at most 20 characters")
	@Column(length = 20)
	private String lastName;

	@NotBlank(message = "Email is required")
	@Email(message = "Invalid email format")
	@Column(unique = true, nullable = false)
	private String email;

	@NotBlank(message = "Password is required")
	@Size(min = 8, message = "Password must be at least 8 characters")
	@Pattern(regexp = "^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=])(?=\\S+$).{8,}$", message = "Password must contain at least one digit, one uppercase letter, one lowercase letter, one special character, and no whitespace")
	@Column(nullable = false)
	private String password;

	@Pattern(regexp = "\\d{10}", message = "Phone number must be 10 digits")
	@Column(length = 10)
	private String phoneNo;

	@Pattern(regexp = "Male|Female|Other", message = "Invalid gender")
	@Column(length = 10)
	private String gender;

	@Column(unique = true)
	private String LinkedInLink;

	@Column(unique = true)
	private String GitHubLink;

	private String Heading;

	@Enumerated(EnumType.STRING)
	@Column(length = 30)
	private Role role;

	@Lob
	private byte[] image;
}
