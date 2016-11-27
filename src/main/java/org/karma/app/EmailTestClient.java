package org.karma.app;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class EmailTestClient {
	
	@Autowired(required=true)      
	public static EmailSender emailSender;
	
	@Autowired
	public EmailTestClient(EmailSender emailSender) {
		this.emailSender = emailSender;
	}

	public static void main(String[] args) {
		// TODO Auto-generated method st
		ApplicationContext context = new ClassPathXmlApplicationContext("spring.xml");
		
		emailSender.send();
	 
	}

}
