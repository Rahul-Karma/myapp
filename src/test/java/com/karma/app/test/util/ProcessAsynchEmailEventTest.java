package com.karma.app.test.util;

import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
import java.util.concurrent.ScheduledExecutorService;
import java.util.concurrent.TimeUnit;

import org.junit.Test;

import com.karma.app.event.ProcessAsynchEmailEvent;

/**
 * 
 * @author MANDHAN
 *
 */
public class ProcessAsynchEmailEventTest {
	
	@Test
	public void testEvent() {	
		ScheduledExecutorService service = Executors.newScheduledThreadPool(2);
		//service.submit(new ProcessAsynchEmailEvent());
		//service.execute(new ProcessAsynchEmailEvent());
		service.scheduleAtFixedRate(new ProcessAsynchEmailEvent(), 0l, 5l, TimeUnit.SECONDS);
	}

}
