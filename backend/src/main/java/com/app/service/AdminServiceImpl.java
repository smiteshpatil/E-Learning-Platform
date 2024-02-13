package com.app.service;

import javax.transaction.Transactional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.custom_exceptions.ResourceNotFoundException;
import com.app.dao.AdminRepository;
import com.app.dto.AdminDTO;
import com.app.entities.Admin;

@Service
@Transactional
public class AdminServiceImpl implements AdminService{
	
	@Autowired
	private AdminRepository adminRepo;
	
	@Autowired
	private ModelMapper mapper;
	
	@Override
	public AdminDTO getAdminByEmail(String adminEmail) {
		Admin admin = adminRepo.findByEmail(adminEmail)
				.orElseThrow(()-> new ResourceNotFoundException("Invalid Emaail for ROLE_ADMIN"));
		return mapper.map(admin, AdminDTO.class);
	}

}
