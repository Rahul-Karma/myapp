package com.karma.app.event;

import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;

public class DBEventFactory implements EventFactory {
	private static Map<String, Event> _eventsMap = null;
	static {
		_eventsMap = new ConcurrentHashMap<String, Event>();
		Event event = new ProcessAsynchEmailEvent();
		_eventsMap.put("Test Event", event);
	}
	@Override
	public Map<String, Event> getEvents() {
		// TODO Auto-generated method stub
		return _eventsMap;
	}

}
