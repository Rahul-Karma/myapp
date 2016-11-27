package com.karma.app.model;

import java.sql.Timestamp;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

@Entity(name="event")
@Table(name="systemevent")
public class Event extends BaseEntity {
	
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	@Column 
	private Timestamp shutdownAt;
	@Column
	private String command;
	@Column
	private Long initialDelay;
	@Column
	private Long period;
	public Timestamp getShutdownAt() {
		return shutdownAt;
	}
	public void setShutdownAt(Timestamp shutdownAt) {
		this.shutdownAt = shutdownAt;
	}
	public String getCommand() {
		return command;
	}
	public void setCommand(String command) {
		this.command = command;
	}
	public Long getInitialDelay() {
		return initialDelay;
	}
	public void setInitialDelay(Long initialDelay) {
		this.initialDelay = initialDelay;
	}
	public Long getPeriod() {
		return period;
	}
	public void setPeriod(Long period) {
		this.period = period;
	}
	@Override
	public String toString() {
		return "Event [shutdownAt=" + shutdownAt + ", command=" + command + ", initialDelay=" + initialDelay
				+ ", period=" + period + "]";
	}
	
	
	
	
}
