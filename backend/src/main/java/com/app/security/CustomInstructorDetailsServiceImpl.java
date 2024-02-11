package com.app.security;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.app.entities.Instructor;
import com.app.repository.InstructorRepository;

@Service
@Transactional
public class CustomInstructorDetailsServiceImpl implements UserDetailsService {
	// dep user dao
	@Autowired
	private InstructorRepository instructorRepo;

	@Override
	public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
		// invoke dao's method to get instructor details form DB
		Instructor instructor = instructorRepo.findByEmail(email)
				.orElseThrow(() ->
				new UsernameNotFoundException("Invalid Email !!!!!"));
		//=> user email exists
		return new CustomInstructorDetails(instructor);
	}

}
 