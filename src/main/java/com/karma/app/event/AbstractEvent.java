package com.karma.app.event;
/**
 * 
 * @author MANDHAN
 *
 */

public abstract class AbstractEvent implements Event {

	public void run() {
		execute();	
	}
	
	public abstract void execute();

}
