package com.capstone.OnlinePortal.service;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.capstone.OnlinePortal.Exception.AccountNotFoundException;
import com.capstone.OnlinePortal.model.Transaction;

@Service
public class TransactionDao {
	
	@Autowired
	private TransactionService dao;
	
	public ArrayList<Transaction> listOfTransaction(int uid) throws AccountNotFoundException  {
		ArrayList<Transaction> translist = new ArrayList<Transaction>();
		for (Transaction transaction : dao.findAll()) {
			if(transaction.getUid()==uid) {
				translist.add(transaction);
	      }
		}
		return translist;
	}

}
