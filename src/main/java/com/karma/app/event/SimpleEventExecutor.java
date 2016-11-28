package com.karma.app.event;

import java.sql.Timestamp;
import java.util.List;
import java.util.concurrent.Executors;
import java.util.concurrent.ScheduledExecutorService;
import java.util.concurrent.TimeUnit;

import com.karma.app.dao.EventDao;
import com.karma.app.dao.EventDaoImpl;
import com.karma.app.model.Event;
/**
 * 
 * @author MANDHAN
 *
 */

public class SystemEventExecutor implements EventExecutor {

	static 
	{
		Event event1 = new Event();
		event1.setId(1);
		event1.setCommand("com.karma.app.event.ProcessAsynchEmailEvent");
		event1.setCreated(new Timestamp(System.currentTimeMillis()));
		event1.setInitialDelay(2l);
		event1.setPeriod(2l);

		EventDao eventDao = new EventDaoImpl();
		eventDao.saveOrUpdate(event1);
		ScheduledExecutorService service = Executors.newScheduledThreadPool(4);
		
		List<Event> events = eventDao.getAll();
		if(events != null && events.size() > 0) {
			for(Event event : events) {
				com.karma.app.event.Event newObject = null;
				try 
				{
					newObject = (com.karma.app.event.Event) Class.forName(event.getCommand()).newInstance();
				} 
				catch (InstantiationException e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				} 
				catch (IllegalAccessException e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				} 
				catch (ClassNotFoundException e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				}
				service.scheduleAtFixedRate(newObject, event.getInitialDelay(), event.getPeriod(), TimeUnit.SECONDS);
			}
		}

	}

}
