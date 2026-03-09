package com.example.demo.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.repo.StudentRepo;
import com.example.demo.entity.StudentEntity;

@Service
public class StudentService {

	@Autowired
	public StudentRepo stdRepo;
	
	
	public List<StudentEntity> serReadAllTheUser() {
		return stdRepo.findAll();
	}
	
	public StudentEntity serAddUser(StudentEntity data) {
		return stdRepo.save(data);
	}
	
	public StudentEntity serReadById(Long id) {
		return stdRepo.findById(id).orElse(null);
	}
	
	public StudentEntity serEditUser(Long id, StudentEntity newdata) {
		Optional<StudentEntity> byId = stdRepo.findById(id);
		if(byId.isPresent()) {
			StudentEntity oldData = byId.get();
			oldData.setName(newdata.getName());
			oldData.setUsername(newdata.getUsername());
			oldData.setPassword(newdata.getPassword());
			oldData.setMobileno(newdata.getMobileno());
			oldData.setAge(newdata.getAge());
			
			return stdRepo.save(oldData);
		}
		
		else {
			return null;
		}
		
		
	}
	
	public List<StudentEntity> serReadByName(String name){
		return stdRepo.findByName(name);
	}
	
	public void serDeleteUser(Long id) {
		boolean existsById = stdRepo.existsById(id);
		if(existsById) {
			stdRepo.deleteById(id);
		}
	}
	
	
	
	
}
