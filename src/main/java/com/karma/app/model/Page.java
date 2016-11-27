package com.karma.app.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

/**
 * 
 * @author Rahul MANDHAN
 *
 */

@Entity(name="page")
@Table(name="page")
public class Page extends BaseEntity {
	
	@Column(name="name")
	private String name;
	
	@Column(name="content")
	private String content;
	
	@Column(name="url")
	private String url;
	
	@Column(name="title")
	private String title;
	
	@Column(name="template_id")
	private int templateId;
	
	@Column(name="state")
	private String state;

	@Override
	public String toString() {
		return "Page [name=" + name + ", content=" + content + ", url=" + url + ", title=" + title + ", templateId="
				+ templateId + ", state=" + state + "]";
	}

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

}
