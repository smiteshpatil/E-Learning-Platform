package com.app.entities;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name = "courses")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@ToString(exclude = { "inst", "students" })
public class Course extends BaseEntity {

	@Column(length = 20)
	private String courseName;

	@Column(length = 20)
	private String category;

	private String description;

	@Column(length = 20)
	private String skillLevel;

	@Column(length = 20)
	private String language;

	@Column
	private Long price;
	
	
	// many to one association(*courses -> 1 Instructor)
	@ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.MERGE) // MERGE : NEW n INTERESTING !!!!!
	@JoinColumn(name = "instructor_id") // Optional BUT reco , to specify the name of FK col.
	private Instructor inst;

//	@ManyToMany(cascade = CascadeType.ALL)
//	@JoinTable(name = "course_students", joinColumns = @JoinColumn(name = "course_id"), inverseJoinColumns = @JoinColumn(name = "student_id"))
//	private Set<Student> students;

	@OneToMany(mappedBy = "course", cascade = CascadeType.ALL, orphanRemoval = true /* , fetch = FetchType.EAGER */)
	private List<Content> contents = new ArrayList<>();
	
	@OneToMany(mappedBy = "course", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
	private List<CartItem> cartItems = new ArrayList<>();

	public void addContent(Content c) {
		contents.add(c);
		c.setCourse(this);
	}

	public void removeContent(Content c) {
		contents.remove(c);
		c.setCourse(null);
	}

}
