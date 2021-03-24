package com.capstone.OnlinePortal.controller;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.capstone.OnlinePortal.Exception.AccountNotFoundException;
import com.capstone.OnlinePortal.model.Transaction;
import com.capstone.OnlinePortal.service.TransactionDao;

@RestController
@CrossOrigin(origins="*")
public class TransactionController {
	
	@Autowired
	private TransactionDao dao;
	
	@GetMapping("/transaction/{uid}")
	private ResponseEntity<Object> listOfTransaction(@PathVariable("uid") int uid){
		ResponseEntity<Object> response = null;
		try {
		ArrayList<Transaction> account = dao.listOfTransaction(uid);
		response = ResponseEntity.status(200).body(account);
		} catch(AccountNotFoundException e) {
			response = ResponseEntity.status(404).body(e.getMessage());
		}
		return response;
	}


}
