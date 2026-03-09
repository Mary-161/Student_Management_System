package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entity.StudentEntity;
import com.example.demo.service.StudentService;

import java.util.List;

@RestController
@RequestMapping("/std")
@CrossOrigin("http://localhost:3000/")
public class StudentController {
	
	@Autowired
	public StudentService stdSer;
	
	@GetMapping("/read")
	public List<StudentEntity> readAllTheUser() {
		return stdSer.serReadAllTheUser();
	}
	
	@PostMapping("/adduser")
	public StudentEntity addUser(@RequestBody StudentEntity data) {
		return stdSer.serAddUser(data);
	}
	
	@GetMapping("/readById/{id}")
	public StudentEntity readById(@PathVariable("id") Long id) {
		return stdSer.serReadById(id);
	}
	
	@PutMapping("/edituser/{id}")
	public StudentEntity editUser(@PathVariable("id") Long id, @RequestBody StudentEntity newdata) {
		return stdSer.serEditUser(id, newdata);
	}
	
	@GetMapping("/readByName/{name}")
	public List<StudentEntity> readByName(@PathVariable("name") String name) {
		return stdSer.serReadByName(name);
	}
	
	@DeleteMapping("/deleteuser/{id}")
	public void deleteUser(@PathVariable("id") Long id) {
		stdSer.serDeleteUser(id);
	}
	
	
}
