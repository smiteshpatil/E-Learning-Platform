package com.app.entities;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.Lob;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import org.springframework.format.annotation.DateTimeFormat;

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
@ToString(exclude = { "inst", "contents" })
public class Course extends BaseEntity {

	@Column(length = 20, unique = true)
	private String courseName;

	@Column(length = 20)
	private String category;

	@Lob
	private String description;

	@Column(length = 20)
	private String skillLevel;

	@Column(length = 20)
	private String language;

	@Column
	private Long price;

	@Column
	@DateTimeFormat(pattern = "yyyy-MM-dd")
	private LocalDate publishedDate;

	@Lob
	private byte[] coursePoster;

	private String imageUrl;

	// many to one association(*courses -> 1 Instructor)
	@ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.MERGE) // MERGE : NEW n INTERESTING !!!!!
	@JoinColumn(name = "instructor_id") // Optional BUT reco , to specify the name of FK col.
	private Instructor inst;

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
