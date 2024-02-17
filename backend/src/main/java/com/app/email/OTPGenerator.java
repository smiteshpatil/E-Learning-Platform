package com.app.email;

import org.springframework.stereotype.Component;
import java.util.Random;

@Component
public class OTPGenerator {
    
    // Generate a random OTP of length 6
    public String generateOTP() {
        int otpLength = 6;
        String numbers = "0123456789";
        Random random = new Random();
        StringBuilder otp = new StringBuilder(otpLength);
        
        for (int i = 0; i < otpLength; i++) {
            otp.append(numbers.charAt(random.nextInt(numbers.length())));
        }
        
        return otp.toString();
    }
}
