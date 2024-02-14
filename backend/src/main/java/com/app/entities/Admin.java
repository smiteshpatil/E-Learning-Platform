package com.app.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name="admin")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@ToString(exclude = "password")
public class Admin extends BaseEntity{
	@Column(length = 20)
	private String firstName;
	@Column(length = 20)
	private String lastName;
	@Column(unique = true, nullable = false)
	private String email;
	@Column( nullable = false)
	private String password;
	
	@Column(length = 10)
	private String phoneNo;

	@Column(length = 10)
	private String gender;

	private String imageUrl;
	
	@Column(unique = true)
	private String LinkedInLink;

	@Column(unique = true)
	private String GitHubLink;
	
	private String Heading;
	
	@Enumerated(EnumType.STRING)
	@Column(length = 30)
	private Role role;
	
}