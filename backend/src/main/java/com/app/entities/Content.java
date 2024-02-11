package com.app.entities;


import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name = "content")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@ToString(exclude = "contentUrl")
public class Content extends BaseEntity{
	
	@Column(length = 20)
	private String courseName;
	
	private String contentUrl;
	
	@ManyToOne(fetch = FetchType.LAZY,cascade = CascadeType.MERGE)
	@JoinColumn(name = "course_id")
	private Course course;
}
