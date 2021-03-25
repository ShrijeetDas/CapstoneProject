package com.cts.onlineportal.service;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cts.onlineportal.exception.AccountNotFoundException;
import com.cts.onlineportal.model.AccountBalance;

@Service
public class AccountBalanceDao {
	
	@Autowired
	private AccountBalanceService dao;
	
	public ArrayList<AccountBalance> listOfAccount(int id) throws AccountNotFoundException  {
		ArrayList<AccountBalance> aclist = new ArrayList<AccountBalance>();
		for (AccountBalance account : dao.findAll()) {
			if(account.getId()==id) {
			aclist.add(account);
	      }
		}
		return aclist;
	}
}