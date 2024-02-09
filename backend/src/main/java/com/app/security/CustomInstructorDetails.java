package com.app.security;

import java.util.Collection;
import java.util.List;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import com.app.entities.Instructor;

public class CustomInstructorDetails implements UserDetails {
	private Instructor instructor;
	

	public CustomInstructorDetails(Instructor instructor) {
		super();
		this.instructor = instructor;
	}

	@Override
	public Collection<? extends GrantedAuthority> getAuthorities() {
		// Can I return List<SimpleGrantedAuthority> ? YESS
		return List.of(new SimpleGrantedAuthority(instructor.getRole().name()));
	}

	@Override
	public String getPassword() {
		// TODO Auto-generated method stub
		return instructor.getPassword();
	}

	@Override
	public String getUsername() {
		// TODO Auto-generated method stub
		return instructor.getEmail();
	}

	@Override
	public boolean isAccountNonExpired() {
		// TODO Auto-generated method stub
		return true;
	}

	@Override
	public boolean isAccountNonLocked() {
		// TODO Auto-generated method stub
		return true;
	}

	@Override
	public boolean isCredentialsNonExpired() {
		// TODO Auto-generated method stub
		return true;
	}

	@Override
	public boolean isEnabled() {
		// TODO Auto-generated method stub
		return true;
	}

}
