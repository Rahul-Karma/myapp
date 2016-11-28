package com.karma.app.model;

import javax.persistence.Column;
import javax.persistence.MappedSuperclass;

@MappedSuperclass
public class Reminder extends BaseEntity {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	@Column
	private int type;
	public int getType() {
		return type;
	}
	public void setType(int type) {
		this.type = type;
	}


}
