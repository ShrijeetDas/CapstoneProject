package com.capstone.OnlinePortal.service;

import org.springframework.data.repository.CrudRepository;

import com.capstone.OnlinePortal.model.User;


public interface UserService extends CrudRepository<User, Integer> {

}
