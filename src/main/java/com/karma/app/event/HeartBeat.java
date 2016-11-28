package com.karma.app.event;

import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;
/**
 * 
 * @author rahul
 *
 */

public class HeartBeat implements Runnable {
	private static EventFactory ef = null;
	private Map<String, Event> _memoryMap = new ConcurrentHashMap<String, Event>();
	private EventExecutor executor = new SimpleEventExecutor();
	public HeartBeat(EventFactory ef) {
		this.ef = ef;
	}
	@Override
	public void run() {
		// TODO Auto-generated method stub
		long now = System.currentTimeMillis();
		System.out.println(" Heart beat starting at "+now);
		_memoryMap = ef.getEvents();
		for(String eventName : _memoryMap.keySet())
		{
			Event event = _memoryMap.get(eventName);
			executor.execute(event);
		}
		
	}

}
