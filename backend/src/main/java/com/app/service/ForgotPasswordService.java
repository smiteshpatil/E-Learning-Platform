package com.app.service;

import java.util.HashMap;
import java.util.Map;
import java.util.Properties;

import javax.mail.Message;
import javax.mail.MessagingException;
import javax.mail.Session;
import javax.mail.Transport;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;
import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.custom_exceptions.ResourceNotFoundException;
import com.app.dao.AdminRepository;
import com.app.dao.InstructorRepository;
import com.app.dao.StudentRepository;
import com.app.dao.UserRepository;
import com.app.email.MyAuthenticator;
import com.app.email.OTPGenerator;
import com.app.entities.Admin;
import com.app.entities.Instructor;
import com.app.entities.Student;
import com.app.entities.UserInfo;

import org.springframework.security.crypto.password.PasswordEncoder;

@Service
@Transactional
public class ForgotPasswordService {

	@Autowired
	private UserRepository userRepo;

	@Autowired
	private StudentRepository studentRepo;

	@Autowired
	private InstructorRepository instructorRepository;

	@Autowired
	private AdminRepository adminRepository;

	@Autowired
	private OTPGenerator otpGenerator;

	@Autowired
	private PasswordEncoder encoder;

	public boolean sendOTP(String email, String userType) {
		String otp = otpGenerator.generateOTP();

		switch (userType.toLowerCase()) {
		case "student":
			Student student = studentRepo.findByEmail(email)
					.orElseThrow(() -> new ResourceNotFoundException("Invalid user type!!!!"));
			if (student != null) {
				sendEmail(email, "Your OTP is: " + otp);
				return true;
			}
			break;
		case "instructor":
			Instructor instructor = instructorRepository.findByEmail(email)
					.orElseThrow(() -> new ResourceNotFoundException("Invalid user type!!!!"));
			if (instructor != null) {
				sendEmail(email, "Your OTP is: " + otp);
				return true;
			}
			break;
		case "admin":
			Admin admin = adminRepository.findByEmail(email)
					.orElseThrow(() -> new ResourceNotFoundException("Invalid user type!!!!"));
			if (admin != null) {
				sendEmail(email, "Your OTP is: " + otp);
				return true;
			}
			break;
		}
		return false;
	}

	public boolean updatePassword(String email, String userType, String newPassword, String otp) {
		switch (userType.toLowerCase()) {
		case "student":
			Student student = studentRepo.findByEmail(email)
					.orElseThrow(() -> new ResourceNotFoundException("Invalid user type!!!!"));
			UserInfo stud = userRepo.findByEmail(email)
					.orElseThrow(() -> new ResourceNotFoundException("Student Not Found in User_Info table"));
			if (student != null && validateOTP(email, otp)) {
				student.setPassword(encoder.encode(newPassword));
				stud.setPassword(encoder.encode(newPassword));
				studentRepo.save(student);
				userRepo.save(stud);
				return true;
			}
			break;
		case "instructor":
			Instructor instructor = instructorRepository.findByEmail(email)
					.orElseThrow(() -> new ResourceNotFoundException("Invalid user type!!!!"));
			UserInfo inst = userRepo.findByEmail(email)
					.orElseThrow(() -> new ResourceNotFoundException("Instructor Not Found in User_Info table"));
			System.out.println(instructor);
			if (instructor != null && validateOTP(email, otp)) {
				instructor.setPassword(newPassword);
				inst.setPassword(encoder.encode(newPassword));
				instructorRepository.save(instructor);
				userRepo.save(inst);
				return true;
			}
			break;
		case "admin":
			Admin admin = adminRepository.findByEmail(email)
					.orElseThrow(() -> new ResourceNotFoundException("Invalid user type!!!!"));
			UserInfo adm = userRepo.findByEmail(email)
					.orElseThrow(() -> new ResourceNotFoundException("Admin Not Found in User_Info table"));
			if (admin != null && validateOTP(email, otp)) {
				admin.setPassword(newPassword);
				adm.setPassword(encoder.encode(newPassword));
				adminRepository.save(admin);
				userRepo.save(adm);
				return true;
			}
			break;
		}
		return false;
	}

	private void sendEmail(String toEmail, String messageBody) {
		// Email configuration
		String fromEmail = "dummyemailsmitesh@gmail.com"; // Change this to your email address
		String password = "hvnryzfgwlwqqotw"; // Change this to your email password
		String subject = "Password Reset OTP";

		// Email properties
		Properties props = new Properties();
		props.put("mail.smtp.auth", "true");
		props.put("mail.smtp.starttls.enable", "true");
		props.put("mail.smtp.host", "smtp.gmail.com"); // Gmail SMTP host
		props.put("mail.smtp.port", "587"); // Gmail SMTP port

		// Create a session with authentication using MyAuthenticator
		Session session = Session.getInstance(props, new MyAuthenticator(fromEmail, password));

		try {
			// Create a message
			Message message = new MimeMessage(session);
			message.setFrom(new InternetAddress(fromEmail));
			message.setRecipients(Message.RecipientType.TO, InternetAddress.parse(toEmail));
			message.setSubject(subject);
			message.setText(messageBody);

			// Send the message
			Transport.send(message);
			System.out.println("Email sent successfully to " + toEmail);
		} catch (MessagingException e) {
			System.out.println("Failed to send email: " + e.getMessage());
			throw new RuntimeException(e);
		}
	}

	private boolean validateOTP(String email, String otp) {
		// Assuming you have a map to store OTPs with email as key
		Map<String, String> otpMap = new HashMap<>(); // You should initialize this map at a higher scope, maybe in the
														// service or a utility class
		// Storing OTP in the map
		otpMap.put(email, otp); // Assuming 'email' is the key and 'otp' is the OTP generated

		// Retrieving OTP from the map
		String storedOTP = otpMap.get(email);
		System.out.println("Stored OTP: " + storedOTP);

		// Check if the given OTP matches the stored OTP for the provided email
		if (otpMap.containsKey(email) && otpMap.get(email).equals(otp)) {
			// OTP is valid, remove it from the map (OTP should be used only once)
			otpMap.remove(email);
			System.out.println("In ValidateOTp method");
			return true;
		}
		return false;
	}
}
