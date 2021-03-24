package com.capstone.OnlinePortal.model;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="transaction")
public class Transaction {
	
	@Id
	@Column(name="TRANSID")
	int transid;
	@Column(name="TRANS_DESC")
	String trans_desc;
	@Column(name="TRANS_DATE")
	String trans_date;
	@Column(name="ACC_ID")
	int acc_id;
	@Column(name="AMOUNT")
	int amount;
	@Column(name="UID")
	int uid;
	public int getUid() {
		return uid;
	}
	public void setUid(int uid) {
		this.uid = uid;
	}
	public int getTransid() {
		return transid;
	}
	public void setTransid(int transid) {
		this.transid = transid;
	}
	public String getTrans_desc() {
		return trans_desc;
	}
	public void setTrans_desc(String trans_desc) {
		this.trans_desc = trans_desc;
	}
	public String getTrans_date() {
		return trans_date;
	}
	public void setTrans_date(String trans_date) {
		this.trans_date = trans_date;
	}
	public int getAcc_id() {
		return acc_id;
	}
	public void setAcc_id(int acc_id) {
		this.acc_id = acc_id;
	}
	public int getAmount() {
		return amount;
	}
	public void setAmount(int amount) {
		this.amount = amount;
	}
	
	

}
