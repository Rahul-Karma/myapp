package com.karma.app.listener;

import javax.servlet.ServletContextEvent;
import javax.servlet.ServletContextListener;
import javax.servlet.annotation.WebListener;

import com.karma.app.event.EventManager;
import com.karma.app.event.EventManagerImpl;
/**
 * 
 * @author rahul
 *
 */

@WebListener
public class MyAppContextListener implements ServletContextListener {
	// set the event engine
	private static EventManager  em=new EventManagerImpl();
	@Override
	public void contextDestroyed(ServletContextEvent event) {
		// TODO Auto-generated method stub
		System.out.println("MyApp Context Destroyed :: "+event);
		
	}

	@Override
	public void contextInitialized(ServletContextEvent event) {
		// TODO Auto-generated method stub
		System.out.println("MyApp Context Initialized :: "+event);
		em.startEventEngine();
	}

}
