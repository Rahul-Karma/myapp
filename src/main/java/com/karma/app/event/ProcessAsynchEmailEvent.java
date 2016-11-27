package com.karma.app.event;

import java.util.Calendar;

/**
 * 
 * @author MANDHAN
 *
 */

public class ProcessAsynchEmailEvent extends AbstractEvent {

	@Override
	public void execute() {
		System.out.println("Task execution started at :: "+Calendar.getInstance().getTime().getTime());
		
		System.out.println("Task execution stoped at :: "+Calendar.getInstance().getTime().getTime());
	}

}
