package com.app.controller;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.AdminDTO;
import com.app.dto.InstructorDTO;
import com.app.dto.SigninRequest;
import com.app.dto.SigninResponse;
import com.app.dto.Signup;
import com.app.dto.StudentDTO;
import com.app.dto.UserDTO;
import com.app.entities.Role;
import com.app.security.JwtUtils;
import com.app.service.AdminService;
import com.app.service.InstructorService;
import com.app.service.SigninService;
import com.app.service.SignupService;
import com.app.service.StudentService;

@RestController
@RequestMapping("/users")
@CrossOrigin(origins = "http://localhost:3000")
public class UserSignInSignUpController {
	@Autowired
	private SignupService userService;

	@Autowired
	private StudentService studentService;

	@Autowired
	private InstructorService instructorService;

	@Autowired
	private AdminService adminService;

	@Autowired
	private SigninService signinService;

	@Autowired
	private JwtUtils utils;

	@Autowired
	private AuthenticationManager mgr;

	// sign up
	@PostMapping("/signup")
	public ResponseEntity<?> userSignup(@RequestBody @Valid Signup dto) {
		System.out.println("in sign up " + dto);
		return ResponseEntity.status(HttpStatus.CREATED).body(userService.registerNewUser(dto));
	}

	@PostMapping("/signin")
	public ResponseEntity<?> signinUser(@RequestBody @Valid SigninRequest reqDTO) {
		System.out.println("in signin " + reqDTO);

		Authentication verifiedAuth = mgr
				.authenticate(new UsernamePasswordAuthenticationToken(reqDTO.getEmail(), reqDTO.getPassword()));

		System.out.println(verifiedAuth.getClass());// Custom user details
		// => auth success

		// Determine the user type
		Role userType = signinService.determineUserType(verifiedAuth);
		System.out.println("UserType is:  " + userType);

		// Get user details based on the determined user type
		Object userDetails = null;
		switch (userType) {
			case ROLE_STUDENT:
				userDetails = studentService.getStudentDetails(reqDTO.getEmail());
				break;
			case ROLE_INSTRUCTOR:
				userDetails = instructorService.getInstructorDetails(reqDTO.getEmail());
				break;
			case ROLE_ADMIN:
				userDetails = adminService.getAdminByEmail(reqDTO.getEmail());
				break;
			default:
				return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Unknown user type");
		}

		// Create a SignInResponse object with JWT token and user details
		SigninResponse<Object> response = new SigninResponse<>(utils.generateJwtToken(verifiedAuth),
				"Successful Authentication!!!", userDetails);

		return ResponseEntity.ok(response);
	}

}
