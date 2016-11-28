package com.karma.app.event;

import java.util.concurrent.Executors;
import java.util.concurrent.ScheduledExecutorService;
import java.util.concurrent.TimeUnit;

public class EventManagerImpl implements EventManager {
	EventFactory ef = null;
	ScheduledExecutorService _executor = Executors.newSingleThreadScheduledExecutor();
	private static final Long _HEAR_BEAT_RATE = new Long(5l);

	@Override
	public boolean startEventEngine() {
		System.out.println("Starting the event engine...");
		ef = new DBEventFactory();
		_executor.scheduleAtFixedRate(new HeartBeat(ef), 0l, _HEAR_BEAT_RATE, TimeUnit.SECONDS);
		return false;
	}

	@Override
	public boolean stopEventEngine() {
		// TODO Auto-generated method stub
		_executor.shutdown();
		return false;
	}

	@Override
	public boolean enableEvent(String eventName) {
		// TODO Auto-generated method stub
		return false;
	}

	@Override
	public boolean disableEvent(String eventName) {
		// TODO Auto-generated method stub
		return false;
	}

}
