package com.cts.onlineportal.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class AccountBalance {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
//	int acid;
	
	String plan_name;
	String plan_desc;
//	String plan_irscode;
//	String acc_bal;
	String sponsor_id;
	String moneySource;
	String currentValue;
	int id;

//	public int getAcid() {
//		return acid;
//	}
//
//	public void setAcid(int acid) {
//		this.acid = acid;
//	}

	public String getPlan_name() {
		return plan_name;
	}

	public void setPlan_name(String plan_name) {
		this.plan_name = plan_name;
	}

	public String getPlan_desc() {
		return plan_desc;
	}

	public void setPlan_desc(String plan_desc) {
		this.plan_desc = plan_desc;
	}

//	public String getPlan_irscode() {
//		return plan_irscode;
//	}
//
//	public void setPlan_irscode(String plan_irscode) {
//		this.plan_irscode = plan_irscode;
//	}

//	public String getAcc_bal() {
//		return acc_bal;
//	}
//
//	public void setAcc_bal(String acc_bal) {
//		this.acc_bal = acc_bal;
//	}

	public String getSponsor_id() {
		return sponsor_id;
	}

	public void setSponsor_id(String sponsor_id) {
		this.sponsor_id = sponsor_id;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getMoneySource() {
		return moneySource;
	}

	public void setMoneySource(String moneySource) {
		this.moneySource = moneySource;
	}

	public String getCurrentValue() {
		return currentValue;
	}

	public void setCurrentValue(String currentValue) {
		this.currentValue = currentValue;
	}

}