package com.app.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
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
@ToString(exclude = "course")
public class Content extends BaseEntity{
	
	@Column
	private Long contentNo;
	@Column(length = 20)
	private String contentName;
	@Column
	private String contentDescription;
	@Column
	private String contentUrl;
	@Column
	private String contentPath;
	
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "course_id")
	private Course course;
}
