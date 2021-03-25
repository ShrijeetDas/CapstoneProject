package com.cts.onlineportal.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cts.onlineportal.exception.UserNotFoundException;
import com.cts.onlineportal.model.User;



@Service
public class UserDao {
	
	@Autowired
	private UserService dao;
	
	public User login(int id, String password) throws UserNotFoundException  {
		Optional<User> option = dao.findById(id);
		if(option.isPresent()) {
			User user = option.get();
			if(user.getPassword().equals(password)) {
			return user;
			}
			throw new UserNotFoundException("User not found");
		}
		else
			throw new UserNotFoundException("User not found");
	}

}

