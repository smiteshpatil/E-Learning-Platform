package com.app.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

@EnableWebSecurity 
@Configuration 
@EnableGlobalMethodSecurity(prePostEnabled = true)

public class SecurityConfig {
	@Autowired
	private JwtAuthenticationFilter jwtFilter;
	
	@Autowired
	private CustomAuthenticationEntryPoint authEntry;

	@Bean
	public SecurityFilterChain authorizeRequests(HttpSecurity http) throws Exception {
		// URL based authorization rules
		http.cors()
		.and().
		//disable CSRF token generation n verification
		csrf()	.disable()
		.exceptionHandling().authenticationEntryPoint(authEntry).
		and().
		authorizeRequests()
		.antMatchers("/users/signup","/users/signin","/courses","/courses/details",
				"/password/sendOtp","/password/updatePassword",
				"/images/upload/{type}/{id}","/images/download/{type}/{id}",
				"/v*/api-doc*/**","/swagger-ui/**","/admin/instructorinfo",
				"/admin/coursedetails","/admin/students/{courseId}",
				"/admin/{studentId}/{courseId}","/payments/createOrder"
				,"/payments/createOrder",
				"/payments/confirmPayment").permitAll()
		// only required for JS clnts (react / angular) : for the pre flight requests
		.antMatchers(HttpMethod.OPTIONS).permitAll()
		.antMatchers(
				"/feedback/add",
				"/students/{studentId}",
				"/students/{studentId}/courses",
				"/students/update/{studentId}",
				"/students/delete/{studentId}",
				"/courses/enrollCourse}",
				"/courses/removeCourse",
				"/courses/student/{studentId}")
		.hasRole("STUDENT")
		.antMatchers("/instructors/{instructorId}",
				"/instructors/{instructorId}/courses",
				"/courses/{instructorId}",
				"/courses/add",
				"/courses/update/{courseId}",
				"/courses/delete/{courseId}",
				"/contents",
				"/contents/add",
				"/contents/{courseId}",
				"/contents/{courseId}/{contentId}",
				"/contents/update/{contentId}",
				"contents/delete/{contentId}")
		.hasRole("INSTRUCTOR")
		
		.antMatchers("/instructors","/students","studentcourses","/admin/enrolledStudents")
		.hasRole("ADMIN")
		.anyRequest().authenticated()
		.and()
		//to tell spring sec : not to use HttpSession to store user's auth details
		.sessionManagement()
		.sessionCreationPolicy(SessionCreationPolicy.STATELESS).
		and()
		// inserting jwt filter before sec filter
		.addFilterBefore(jwtFilter, UsernamePasswordAuthenticationFilter.class);
		return http.build();
	}

	@Bean
	public AuthenticationManager authenticationManager(AuthenticationConfiguration config) throws Exception {
		return config.getAuthenticationManager();
	}
}
