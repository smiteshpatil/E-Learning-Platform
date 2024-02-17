package com.app.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


//import javax.persistence.Column;
//import javax.persistence.Entity;
//import javax.persistence.FetchType;
//import javax.persistence.GeneratedValue;
//import javax.persistence.GenerationType;
//import javax.persistence.Id;
//import javax.persistence.JoinColumn;
//import javax.persistence.Lob;
//import javax.persistence.ManyToOne;
//import javax.persistence.Table;
//
//import lombok.AllArgsConstructor;
//import lombok.Getter;
//import lombok.NoArgsConstructor;
//import lombok.Setter;
//
//@Entity
//@Table(name = "QnA")
//@NoArgsConstructor
//@AllArgsConstructor
//@Getter
//@Setter
//public class QnA {
//	
//	@Column(unique = true)
//	@Id
//	@GeneratedValue(strategy = GenerationType.IDENTITY)	
//	private Long qid;	
//	
//	@Lob
//	@Column(unique = true)
//	private String question;
//	
//	@Lob
//	@Column
//	private String answer;
//	
//	@Column
//	private boolean isAnswer = false;
//		
//	@Column(name = "course_id") // Foreign Key
//    private Long courseId;
//    
////    @ManyToOne(fetch = FetchType.LAZY) // Many QnA can belong to one Course
////    @JoinColumn(name = "course_id", referencedColumnName = "id")
////    private Course course;
////	
//	
//}

// QnA Entity
@Entity
@Table(name = "QnA")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class QnA extends BaseEntity{    
    
    @Column(unique = true, nullable = false, length = 1000) // Adjust length as needed
    private String question;
    
    @Column
    private String answer;
    
    @Column
    private boolean answered;
        
    @Column(name = "course_id") // Foreign Key
    private Long courseId;
    
}



