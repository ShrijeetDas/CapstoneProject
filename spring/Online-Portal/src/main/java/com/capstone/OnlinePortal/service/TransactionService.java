package com.capstone.OnlinePortal.service;

import org.springframework.data.repository.CrudRepository;

import com.capstone.OnlinePortal.model.Transaction;

public interface TransactionService extends CrudRepository<Transaction, Integer> {

}
