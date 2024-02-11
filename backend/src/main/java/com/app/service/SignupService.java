package com.app.service;

import com.app.dto.SignupRequest;

public interface SignupService {
	SignupRequest registerNewInstructor(SignupRequest request);
	SignupRequest registerNewStudent(SignupRequest request);
}
