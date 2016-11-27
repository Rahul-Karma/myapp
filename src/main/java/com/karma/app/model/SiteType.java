package com.karma.app.model;

public enum SiteType {
	
	BLOG(1),INFO(2),EVENT(3);
	
	private final int type;

	private SiteType(int type) {
		this.type = type;
	}
	
	public int getType() {
		return this.type;
	}
	
	

}
