package com.karma.app.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

@Entity
@Table(name="reminder")
public class AutoReminder extends Reminder {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	@Column
	private int templateType;
	@Column
	private String body;
	@Column
	private String subject;
	@Column
	private String receipients;
	
	private int memberId;

	public String getBody() {
		return body;
	}
	public void setBody(String body) {
		this.body = body;
	}
	public String getSubject() {
		return subject;
	}
	public void setSubject(String subject) {
		this.subject = subject;
	}
	public int getTemplateType() {
		return templateType;
	}
	public void setTemplateType(int templateType) {
		this.templateType = templateType;
	}
	public int getMemberId() {
		return memberId;
	}
	public void setMemberId(int memberId) {
		this.memberId = memberId;
	}
	public String getReceipients() {
		return receipients;
	}
	public void setReceipients(String receipients) {
		this.receipients = receipients;
	}
	
	

}
