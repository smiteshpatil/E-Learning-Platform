package com.app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.app.service.ForgotPasswordService;

@RestController
@RequestMapping("/password")
@CrossOrigin(origins = "http://localhost:3000")
public class ForgotPasswordController {

    @Autowired
    private ForgotPasswordService forgotPasswordService;

    // Endpoint for sending OTP
    @PostMapping("/sendOtp")
    public ResponseEntity<String> sendOTP(@RequestParam String email, @RequestParam String userType) {
        boolean isSent = forgotPasswordService.sendOTP(email, userType);
        if (isSent) {
            return ResponseEntity.ok("OTP sent successfully");
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Failed to send OTP");
        }
    }

    // Endpoint for updating password
    @PostMapping("/updatePassword")
    public ResponseEntity<String> updatePassword(@RequestParam String email,
                                                 @RequestParam String userType,
                                                 @RequestParam String newPassword,
                                                 @RequestParam String otp) {
        boolean isUpdated = forgotPasswordService.updatePassword(email, userType, newPassword, otp);
        if (isUpdated) {
            return ResponseEntity.ok("Password updated successfully , newPassword : " + newPassword);
        } else {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Failed to update password");
        }
    }
}
