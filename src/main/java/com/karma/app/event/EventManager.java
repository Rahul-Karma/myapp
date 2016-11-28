package com.karma.app.event;
/**
 * 
 * @author rahul
 *
 */

public interface EventManager {
	
	public boolean startEventEngine();
	public boolean stopEventEngine();
	public boolean enableEvent(String eventName);
	public boolean disableEvent(String eventName);

}
