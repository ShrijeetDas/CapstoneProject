package com.capstone.OnlinePortal.service;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.capstone.OnlinePortal.Exception.AccountNotFoundException;
import com.capstone.OnlinePortal.model.Account;

@Service
public class AccountDao {
	
	@Autowired
	private AccountService dao;
	
	public ArrayList<Account> listOfAccount(int id) throws AccountNotFoundException  {
		ArrayList<Account> aclist = new ArrayList<Account>();
		for (Account account : dao.findAll()) {
			if(account.getId()==id) {
			aclist.add(account);
	      }
		}
		return aclist;
	}
}
