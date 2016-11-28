package com.karma.app.model;

public enum ReminderTemplateType {
	
	CELEBERATION_BIRTHDAY_WISH(1), CELEBERATION_MARRIAGE_CONGO(2), 
	CELEBERATION_MARRIAGE_ANNIVERSARY(3), MEMORIAL_DEATH_ANNIVERSARY(4),
	SIMPLE_REMINDER(5);
	private int type;
	ReminderTemplateType(int type)
	{
		this.type = type;
	}
	public int getType()
	{
		return type;
	}

}
