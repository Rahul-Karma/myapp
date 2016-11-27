package com.karma.app.bean;

public class PageBean extends BaseBean {

	
	private String name;

	private String content;

	private String url;

	private String title;

	private int templateId;
	
	private String state;
	
	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getContent() {
		return content;
	}

	public void setContent(String content) {
		this.content = content;
	}

	public String getUrl() {
		return url;
	}

	public void setUrl(String url) {
		this.url = url;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public int getTemplateId() {
		return templateId;
	}

	public void setTemplateId(int templateId) {
		this.templateId = templateId;
	}

	public String getState() {
		return state;
	}

	public void setState(String state) {
		this.state = state;
	}


	@Override
	public String toString() {
		return "PageBean [name=" + name + ", content=" + content + ", url=" + url + ", title=" + title + ", templateId="
				+ templateId + ", state=" + state + "]";
	}

}
