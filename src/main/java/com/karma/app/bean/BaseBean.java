package com.karma.app.bean;

import java.sql.Timestamp;

public class BaseBean {
	
	private long id;
	private Timestamp created;
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public Timestamp getCreated() {
		return created;
	}
	public void setCreated(Timestamp created) {
		this.created = created;
	}

}
