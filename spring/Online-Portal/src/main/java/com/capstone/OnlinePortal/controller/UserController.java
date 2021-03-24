package com.capstone.OnlinePortal.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.capstone.OnlinePortal.Exception.UserNotFoundException;
import com.capstone.OnlinePortal.service.UserDao;
import com.capstone.OnlinePortal.model.User;


@RestController
@CrossOrigin(origins="*")
public class UserController {

	@Autowired
	private UserDao userDao;
	
	@GetMapping("/login/objectKey/{id}/{password}")
	private ResponseEntity<Object> login(@PathVariable("id") int id,@PathVariable("password") String password){
		ResponseEntity<Object> response = null;
		try {
		User user = userDao.login(id,password);
		response = ResponseEntity.status(200).body(user);
		} catch(UserNotFoundException e) {
			response = ResponseEntity.status(404).body(e.getMessage());
		}
		return response;
	}
}
