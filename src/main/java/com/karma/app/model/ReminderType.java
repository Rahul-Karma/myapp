package com.karma.app.model;

public enum ReminderType {
	
	EMAIL_REMINDER(1), MESSAGE_REMINDER(2);
	private int type;
	ReminderType(int type)
	{
		this.type = type;
	}
	public int getType()
	{
		return type;
	}

}