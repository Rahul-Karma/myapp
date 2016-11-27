package org.karma.app;

import java.io.Serializable;
import java.sql.Timestamp;

public class EmailMessage implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = -2516940444488763699L;
	
	private long id;
	private Timestamp created;
	private String body;
	private String subject;
	private String toEmail;
	private String fromEmail;
	private String status;
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public Timestamp getCreated() {
		return created;
	}
	public void setCreated(Timestamp created) {
		this.created = created;
	}
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
	public String getToEmail() {
		return toEmail;
	}
	public void setToEmail(String toEmail) {
		this.toEmail = toEmail;
	}
	public String getFromEmail() {
		return fromEmail;
	}
	public void setFromEmail(String fromEmail) {
		this.fromEmail = fromEmail;
	}
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	@Override
	public String toString() {
		return "EmailMessage [id=" + id + ", created=" + created + ", body=" + body + ", subject=" + subject
				+ ", toEmail=" + toEmail + ", fromEmail=" + fromEmail + ", status=" + status + "]";
	}
	
	

}
