package com.capstone.OnlinePortal.Exception;

public class AccountNotFoundException extends Exception{
	
	public AccountNotFoundException() {
		super("Account Not Found");
	}
	
	public AccountNotFoundException(String msg) {
		super(msg);
	}

}
