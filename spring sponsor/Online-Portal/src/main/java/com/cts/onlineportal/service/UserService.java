package com.cts.onlineportal.service;

import org.springframework.data.repository.CrudRepository;

import com.cts.onlineportal.model.User;




public interface UserService extends CrudRepository<User, Integer> {

}
