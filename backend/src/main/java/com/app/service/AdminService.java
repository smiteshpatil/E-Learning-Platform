package com.app.service;

import com.app.dto.AdminDTO;

public interface AdminService {
	AdminDTO getAdminByEmail(String adminEmail);
}
