 package com.app.entities;


import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Lob;
import javax.persistence.ManyToMany;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonProperty.Access;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;


@Entity
@Table(name = "students")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@ToString(exclude = {"password","imagePath","LinkedInLink", "GitHubLink"})
public class Student extends BaseEntity{
	
	@Column( length = 20)
	private String firstName;
	
	@Column( length = 20)
	private String lastName;
	
	@Column(unique = true, nullable = false)
	private String email;
	
	@Column 
	private String password;
	
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
	
	@Lob // large object :col : longblob
	private byte[] image; //This will be used for storing n restoring images in DB
	private String imagePath;//This will be used for storing n restoring images in server side folder
	
	@OneToMany(mappedBy = "student",fetch = FetchType.LAZY, cascade = CascadeType.ALL)
	private List<CartItem> cartItems = new ArrayList<>();
	
//	@OneToMany(mappedBy = "student", 
//			cascade = CascadeType.ALL, 
//			orphanRemoval = true /* , fetch = FetchType.EAGER */ )
//	private List<Course> courses = new ArrayList<>();
//	
	
//	public void addCourseToStudent(Course c) {
//		courses.add(c);
//		c.setStudent(this); //course -> students
//	}
//	
//	public void deleteCourse(Course c) {
//		courses.remove(c);  //instructor -> course
//		c.setStudent(null);//course -> student
//	}
//	@ManyToMany(mappedBy = "students")
//	private List<Course> courses = new ArrayList<>();
//	
	
}
