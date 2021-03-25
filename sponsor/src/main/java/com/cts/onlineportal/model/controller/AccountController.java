package com.cts.onlineportal.model.controller;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.cts.onlineportal.exception.AccountNotFoundException;
import com.cts.onlineportal.model.AccountBalance;
import com.cts.onlineportal.service.AccountBalanceDao;


@RestController
@CrossOrigin(origins="*")
public class AccountController {
	
	@Autowired
	private AccountBalanceDao dao;
	
	@GetMapping("/listOfAccount/{id}")
	private ResponseEntity<Object> login(@PathVariable("id") int id){
		ResponseEntity<Object> response = null;
		try {
		ArrayList<AccountBalance> account = dao.listOfAccount(id);
		response = ResponseEntity.status(200).body(account);
		} catch(AccountNotFoundException e) {
			response = ResponseEntity.status(404).body(e.getMessage());
		}
		return response;
	}

}