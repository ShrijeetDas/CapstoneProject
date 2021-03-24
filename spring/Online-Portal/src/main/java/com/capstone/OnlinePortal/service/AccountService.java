package com.capstone.OnlinePortal.service;

import org.springframework.data.repository.CrudRepository;

import com.capstone.OnlinePortal.model.Account;

public interface AccountService extends CrudRepository<Account, Integer>{

}
