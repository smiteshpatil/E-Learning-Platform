package com.app.entities;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.FetchType;
import javax.persistence.Lob;
import javax.persistence.ManyToMany;
import javax.persistence.OneToMany;
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

// Other imports...

@Entity
@Table(name = "students")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@ToString(exclude = { "password","LinkedInLink", "GitHubLink" })
public class Student extends BaseEntity {

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

	@Column(length = 10)
	private String gender;

	@Enumerated(EnumType.STRING)
	@Column(length = 30)
	private Role role;

	@Column(unique = true)
	private String LinkedInLink;

	@Column(unique = true)
	private String GitHubLink;

	private String heading;
	
	@Lob
	private byte[] image;

	@OneToMany(mappedBy = "student", fetch = FetchType.LAZY, cascade = CascadeType.ALL)
	private List<CartItem> cartItems = new ArrayList<>();

	// @OneToMany(mappedBy = "student",
	// cascade = CascadeType.ALL,
	// orphanRemoval = true /* , fetch = FetchType.EAGER */ )
	// private List<Course> courses = new ArrayList<>();
	//

	// public void addCourseToStudent(Course c) {
	// courses.add(c);
	// c.setStudent(this); //course -> students
	// }
	//
	// public void deleteCourse(Course c) {
	// courses.remove(c); //instructor -> course
	// c.setStudent(null);//course -> student
	// }
//	 @ManyToMany(mappedBy = "students")
//	 private List<Course> courses = new ArrayList<>();
//	

}
