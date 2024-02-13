package com.app.entities;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Lob;
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
@Table(name = "instructors")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@ToString(exclude = {"password","imageUrl","courses"})
public class Instructor extends BaseEntity {
	
	@Column(length = 20)
	private String firstName;

	@Column(length = 20)
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

	@Lob // large object :col : longblob
	private byte[] image; //This will be used for storing n restoring images in DB
	private String imagePath;//This will be used for storing n restoring images in server side folder
	
	
	@OneToMany(mappedBy = "inst", 
			cascade = CascadeType.ALL, 
			orphanRemoval = true /* , fetch = FetchType.EAGER */ )
	private List<Course> courses = new ArrayList<>();
	
	
	
	//add course helper method
	public void addCourse(Course c) {
		courses.add(c);  //instructor -> course
		c.setInst(this); //course -> instructor
	}
	
	public void deleteCourse(Course c) {
		courses.remove(c);  //instructor -> course
		c.setInst(null); //course -> instructor
	}
	
	
	
	
	
	

}
